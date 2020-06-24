from manimlib.imports import *

class intro(Scene):
    def construct(self):
        circle = Circle().set_height(FRAME_HEIGHT)
        circle.scale(0.9)
        
        self.play(ShowCreation(circle))

        x=5
        y=360
        lines = VGroup()
        for i in range(y):
            start_point = circle.point_from_proportion((i%y)/y)
            end_point = circle.point_from_proportion(((i*x)%y)/y)
            line = Line(start_point, end_point).set_stroke(width=0.75)
            lines.add(line)

        self.play(LaggedStartMap(ShowCreation, lines, run_time=15))

        self.play(FadeOut(lines), FadeOut(circle))

