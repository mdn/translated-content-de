---
title: Orientierung und Bewegungsdaten erklärt
slug: Web/API/Device_orientation_events/Orientation_and_motion_data_explained
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Device Orientation Events")}}

Bei der Verwendung von Orientierungs- und Bewegungsereignissen ist es wichtig zu verstehen, was die vom Browser bereitgestellten Werte bedeuten. Dieser Artikel bietet Details zu den verwendeten Koordinatensystemen und deren Anwendung.

## Über Koordinatenrahmen

Ein **Koordinatenrahmen** ist ein System, bei dem die Orientierung der drei Achsen (X, Y und Z) in Bezug auf ein Objekt definiert ist. Es gibt zwei Koordinatenrahmen, die bei der Verwendung von Orientierungs- und Bewegungsereignissen berücksichtigt werden müssen:

### Erdkoordinatenrahmen

Der Erdkoordinatenrahmen ist der Koordinatenrahmen, der auf das Zentrum der Erde fixiert ist; das heißt, die Achsen sind basierend auf der Erdanziehung und der Standardausrichtung des magnetischen Nordens ausgerichtet. Wir verwenden Großbuchstaben ("X", "Y" und "Z"), um die Achsen des Erdkoordinatenrahmens zu beschreiben.

- Die **X**-Achse verläuft entlang der Erdoberfläche, senkrecht zur Y-Achse und positiv nach Osten (und daher negativ nach Westen).
- Die **Y**-Achse verläuft entlang der Erdoberfläche und ist positiv in Richtung des wahren Nordens (d.h. des Nordpols, nicht des magnetischen Nordens) und negativ in Richtung des wahren Südens.
- Die **Z**-Achse ist senkrecht zur Erdoberfläche; denken Sie an sie als eine Linie, die zwischen dem Gerät und dem Erdmittelpunkt gezogen wird. Der Wert der Z-Koordinate ist positiv nach oben (weg vom Erdmittelpunkt) und negativ nach unten (zum Erdmittelpunkt).

### Gerätekoordinatenrahmen

Der Gerätekoordinatenrahmen ist der Koordinatenrahmen, der auf das Zentrum des Geräts fixiert ist. Wir verwenden Kleinbuchstaben ("x", "y" und "z"), um die Achsen des Gerätekoordinatenrahmens zu beschreiben.

![Zeichnung, die die drei Achsen eines mobilen Geräts darstellt](axes.png)

- Die **x**-Achse liegt in der Ebene des Bildschirms und ist positiv nach rechts und negativ nach links.
- Die **y**-Achse liegt in der Ebene des Bildschirms und ist positiv nach oben und negativ nach unten.
- Die **z**-Achse ist senkrecht zum Bildschirm oder zur Tastatur und erstreckt sich positiv nach außen vom Bildschirm weg.

> [!NOTE]
> Bei einem Telefon oder Tablet wird die Orientierung des Geräts immer in Bezug auf die Standardausrichtung des Bildschirms betrachtet; dies ist bei den meisten Geräten die "Hochformat"-Ausrichtung. Bei einem Laptop-Computer wird die Orientierung in Bezug auf die Tastatur betrachtet. Wenn Sie Änderungen der Geräteausrichtung erkennen möchten, um dies zu kompensieren, können Sie das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis verwenden.

## Über die Rotation

Die Rotation wird um eine gegebene Achse beschrieben in Bezug auf die Anzahl der Gradunterschiede zwischen dem Koordinatenrahmen des Geräts und dem Erdkoordinatenrahmen. Sie wird in Grad gemessen.

### Alpha

Die Rotation um die z-Achse — das heißt, das Verdrehen des Geräts — bewirkt, dass sich der **alpha**-Rotationswinkel ändert:

![Positive Alpha rotiert das Gerät gegen den Uhrzeigersinn.](alpha.png)

Der Alpha-Winkel beträgt 0°, wenn die Oberseite des Geräts direkt auf den Nordpol der Erde zeigt, und erhöht sich, wenn das Gerät gegen den Uhrzeigersinn gedreht wird. Somit entspricht 90° Westen, 180° Süden und 270° Osten.

### Beta

Die Rotation um die x-Achse — das heißt, das Neigen des Geräts weg von oder hin zum Benutzer — bewirkt, dass sich der **beta**-Rotationswinkel ändert:

![Positive Beta neigt das Gerät nach vorne in Richtung Benutzer.](beta2.png)

Der Beta-Winkel beträgt 0°, wenn die Ober- und Unterseite des Geräts gleich weit von der Erdoberfläche entfernt sind; er erhöht sich in Richtung 180°, wenn das Gerät nach vorne in Richtung Benutzer geneigt wird, und verringert sich in Richtung -180°, wenn das Gerät nach hinten vom Benutzer weg geneigt wird.

### Gamma

Die Rotation um die y-Achse — das heißt, das Kippen des Geräts nach links oder rechts — bewirkt, dass sich der **gamma**-Rotationswinkel ändert:

![Positive Gamma neigt das Gerät nach rechts.](gamma.png)

Der Gamma-Winkel beträgt 0°, wenn die linke und rechte Seite des Geräts gleich weit von der Erdoberfläche entfernt sind, und erhöht sich in Richtung 90°, wenn das Gerät nach rechts gekippt wird, und in Richtung -90°, wenn das Gerät nach links gekippt wird.
