from manimlib.imports import *

class intro(Scene):
    def construct(self):
        circle = Circle().set_height(FRAME_HEIGHT)
        circle.scale(0.9)
        
        self.play(ShowCreation(circle))

        x=3
        y=60
        for i in range(y):
            start_point = circle.point_from_proportion((i%y)/y)
            end_point = circle.point_from_proportion(((i*x)%y)/y)
            line = Line(start_point, end_point)
            self.play(ShowCreation(line))
