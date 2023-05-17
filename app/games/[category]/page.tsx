import React from "react";

type Props = {
    params: { category: string };
};

export default function Category({ params }: Props) {
    return <div>{params.category}</div>;
}
