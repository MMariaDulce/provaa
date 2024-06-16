import React from 'react';
import { DivTitulo, H1, Section1, DivTitulo2, H2, DivComeco } from "../Style/Planilha";
import Info from "./Info";


const Relatorio = ({ list }) => {
    return (
        <>
            
            <DivTitulo>
                <H1>Relatório Semanal</H1>
            </DivTitulo>

            <Section1>
                {Array.from({ length: 6 }, (_, index) => (
                    <DivComeco key={index}>
                        <DivTitulo2>
                            <H2>DIA</H2>
                        </DivTitulo2>
                        {list[index] ? (
                            <Info 
                                nome={list[index].nome} 
                                sala={list[index].sala} 
                                hora={list[index].hora} 
                                data={list[index].data} 
                            />
                        ) : (
                            <p>Sem dados para este dia</p>
                        )}
                    </DivComeco>
                ))}
            </Section1>
        </>
    );
};
export default Relatorio;