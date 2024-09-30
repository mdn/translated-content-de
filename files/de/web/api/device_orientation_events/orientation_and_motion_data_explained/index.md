---
title: Orientierungs- und Bewegungsdaten erklärt
slug: Web/API/Device_orientation_events/Orientation_and_motion_data_explained
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Beim Verwenden von Orientierungs- und Bewegungsereignissen ist es wichtig zu verstehen, was die vom Browser bereitgestellten Werte bedeuten. Dieser Artikel bietet Details zu den im Spiel befindlichen Koordinatensystemen und deren Verwendung.

## Zu Koordinatenrahmen

Ein **Koordinatenrahmen** ist ein System, bei dem die Ausrichtung der drei Achsen (X, Y und Z) in Bezug auf ein Objekt definiert ist. Bei der Nutzung von Orientierungs- und Bewegungsereignissen sind zwei Koordinatenrahmen zu berücksichtigen:

### Erdkoordinatenrahmen

Der Erdkoordinatenrahmen ist der Koordinatenrahmen, der auf den Mittelpunkt der Erde fixiert ist; das heißt, die Achsen sind basierend auf der Schwerkraft und der standardmäßigen magnetischen Nordausrichtung ausgerichtet. Wir verwenden Großbuchstaben ("X", "Y" und "Z"), um die Achsen des Erdkoordinatenrahmens zu beschreiben.

- Die **X**-Achse verläuft entlang der Bodenebene, senkrecht zur Y-Achse und positiv nach Osten (und daher negativ nach Westen).
- Die **Y**-Achse verläuft entlang der Bodenebene und ist positiv nach Norden (das heißt, dem geographischen Nordpol, nicht dem magnetischen Norden) und negativ nach Süden.
- Die **Z**-Achse steht senkrecht zur Bodenebene; stellen Sie sich dies als eine Linie zwischen dem Gerät und dem Mittelpunkt der Erde vor. Der Wert der Z-Koordinate ist positiv nach oben (weg vom Mittelpunkt der Erde) und negativ nach unten (zum Mittelpunkt der Erde hin).

### Gerätekoordinatenrahmen

Der Gerätekoordinatenrahmen ist der Koordinatenrahmen, der auf den Mittelpunkt des Geräts fixiert ist. Wir verwenden Kleinbuchstaben ("x", "y" und "z"), um die Achsen des Gerätekoordinatenrahmens zu beschreiben.

![Zeichnung, die die drei Achsen eines mobilen Geräts darstellt](axes.png)

- Die **x**-Achse befindet sich in der Ebene des Bildschirms und ist positiv nach rechts und negativ nach links.
- Die **y**-Achse befindet sich in der Ebene des Bildschirms und ist positiv nach oben und negativ nach unten.
- Die **z**-Achse ist senkrecht zum Bildschirm oder zur Tastatur und ist positiv von dem Bildschirm ausgehend.

> [!NOTE]
> Auf einem Telefon oder Tablet wird die Ausrichtung des Geräts immer in Bezug auf die Standardausrichtung des Bildschirms betrachtet; dies ist bei den meisten Geräten die "Portrait"-Ausrichtung. Bei einem Laptop-Computer wird die Ausrichtung in Bezug auf die Tastatur betrachtet. Wenn Sie Änderungen in der Geräteausrichtung erkennen möchten, um diese auszugleichen, können Sie das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis verwenden.

## Über Drehung

Drehung wird um jede gegebene Achse in Bezug auf den Unterschied in Grad zwischen dem Koordinatenrahmen des Geräts und dem des Erdkorrdinatenrahmens beschrieben und in Grad gemessen.

### Alpha

Drehung um die z-Achse — also das Verdrehen des Geräts — bewirkt eine Änderung des **alpha**-Drehwinkels:

![Positives Alpha dreht das Gerät gegen den Uhrzeigersinn.](alpha.png)

Der Alphawinkel beträgt 0°, wenn die Oberseite des Geräts direkt zum Nordpol der Erde zeigt, und erhöht sich, wenn das Gerät gegen den Uhrzeigersinn gedreht wird. Somit entspricht 90° Westen, 180° Süden und 270° Osten.

### Beta

Drehung um die x-Achse — also das Neigen des Geräts vom oder zum Benutzer — bewirkt eine Änderung des **beta**-Drehwinkels:

![Positives Beta kippt das Gerät nach vorne zum Benutzer.](beta2.png)

Der Betawinkel beträgt 0°, wenn die Ober- und Unterseite des Geräts gleich weit von der Erdoberfläche entfernt sind; er erhöht sich Richtung 180°, wenn das Gerät nach vorne zum Benutzer gekippt wird, und verringert sich Richtung -180°, wenn das Gerät nach hinten vom Benutzer weg geneigt wird.

### Gamma

Drehung um die y-Achse — also das Kippen des Geräts nach links oder rechts — bewirkt eine Änderung des **gamma**-Drehwinkels:

![Positives Gamma kippt das Gerät nach rechts.](gamma.png)

Der Gammawinkel beträgt 0°, wenn die linke und rechte Seite des Geräts gleich weit von der Erdoberfläche entfernt sind, und erhöht sich Richtung 90°, wenn das Gerät nach rechts gekippt wird, und Richtung -90°, wenn es nach links gekippt wird.
