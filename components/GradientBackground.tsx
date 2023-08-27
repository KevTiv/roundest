import React from "react";
import {
    Canvas,
    Rect,
    SweepGradient as SKIASweepGradient,
    Skia,
    Shader,
    vec
} from "@shopify/react-native-skia";
import {View} from "react-native";

type SweepGradientProps = {
    children?: React.ReactNode
}

export const SweepGradient = ({children}:SweepGradientProps) => {
    return (
        <Canvas style={{ flex: 1 }}>
            <Rect x={0} y={0} width={256} height={256}>
                <SKIASweepGradient
                    c={vec(128, 128)}
                    colors={["cyan", "magenta", "yellow", "cyan"]}
                />
            </Rect>
            <>{children}</>
        </Canvas>
    );
};
