---
title: Orientierung und Bewegungsdaten erklärt
slug: Web/API/Device_orientation_events/Orientation_and_motion_data_explained
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Wenn Sie Orientierungs- und Bewegungsereignisse nutzen, ist es wichtig zu verstehen, welche Bedeutung die vom Browser gelieferten Werte haben. Dieser Artikel erklärt die zugrundeliegenden Koordinatensysteme und deren Verwendung.

## Über Koordinatenrahmen

Ein **Koordinatenrahmen** ist ein System, bei dem die Ausrichtung der drei Achsen (X, Y und Z) in Bezug auf ein Objekt definiert ist. Es gibt zwei Koordinatenrahmen, die bei der Verwendung von Orientierungs- und Bewegungsereignissen zu berücksichtigen sind:

### Erdkoordianatenrahmen

Der Erdkoordinatenrahmen ist auf das Erdzentrum fixiert; das bedeutet, die Achsen sind anhand der Schwerkraft und der Standardausrichtung des magnetischen Nordens ausgerichtet. Wir verwenden Großbuchstaben ("X", "Y" und "Z"), um die Achsen des Erdkoordinatenrahmens zu beschreiben.

- Die **X**-Achse verläuft entlang der Erdoberfläche, senkrecht zur Y-Achse, und ist positiv nach Osten und damit negativ nach Westen.
- Die **Y**-Achse verläuft entlang der Erdoberfläche und ist positiv in Richtung des geografischen Nordpols (nicht des magnetischen Nordens) und negativ gen Süden.
- Die **Z**-Achse ist senkrecht zur Erdoberfläche; denken Sie an sie als eine Linie zwischen dem Gerät und dem Erdzentrum. Der Wert der Z-Koordinate ist positiv nach oben (weg vom Erdzentrum) und negativ nach unten (zum Erdzentrum hin).

### Gerätekoordinatenrahmen

Der Gerätekoordinatenrahmen ist der auf das Gerätezentrum fixierte Koordinatenrahmen. Wir verwenden Kleinbuchstaben ("x", "y" und "z"), um die Achsen des Gerätekoordinatenrahmens zu beschreiben.

![Zeichnung, die die drei Achsen eines mobilen Geräts darstellt](axes.png)

- Die **x**-Achse befindet sich in der Ebene des Bildschirms und ist positiv nach rechts und negativ nach links.
- Die **y**-Achse befindet sich ebenfalls in der Ebene des Bildschirms und ist positiv nach oben und negativ nach unten.
- Die **z**-Achse ist senkrecht zum Bildschirm oder zur Tastatur und ist positiv, wenn sie sich vom Bildschirm weg erstreckt.

> [!NOTE]
> Bei einem Telefon oder Tablet wird die Ausrichtung des Geräts stets in Bezug auf die Standardausrichtung des Bildschirms betrachtet; diese ist bei den meisten Geräten die Hochformatausrichtung. Bei einem Laptop wird die Ausrichtung in Bezug auf die Tastatur betrachtet. Wenn Sie Änderungen der Geräteausrichtung erkennen möchten, um diese auszugleichen, können Sie das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis verwenden.

## Über Drehungen

Drehungen werden in Bezug auf eine gegebene Achse als Anzahl der Gradangaben zwischen dem Koordinatenrahmen des Geräts und dem Erdkoordinatenrahmen beschrieben und in Grad gemessen.

### Alpha

Die Drehung um die z-Achse – also das Verdrehen des Geräts – bewirkt eine Änderung des **Alpha**-Drehwinkels:

![Positives Alpha dreht das Gerät gegen den Uhrzeigersinn.](alpha.png)

Der Alpha-Winkel beträgt 0°, wenn die Oberseite des Geräts direkt zum geografischen Nordpol zeigt und nimmt zu, wenn das Gerät gegen den Uhrzeigersinn gedreht wird. So entspricht 90° dem Westen, 180° dem Süden und 270° dem Osten.

### Beta

Die Drehung um die x-Achse – das Neigen des Geräts weg vom oder zum Nutzer – bewirkt eine Änderung des **Beta**-Drehwinkels:

![Positives Beta neigt das Gerät nach vorne zum Benutzer hin.](beta2.png)

Der Beta-Winkel beträgt 0°, wenn die Ober- und Unterseite des Geräts denselben Abstand zur Erdoberfläche haben; er nimmt in Richtung 180° zu, wenn das Gerät nach vorne zum Benutzer geneigt wird, und ab in Richtung -180°, wenn das Gerät nach hinten weg vom Benutzer geneigt wird.

### Gamma

Die Drehung um die y-Achse – das Neigen des Geräts nach links oder rechts – bewirkt eine Änderung des **Gamma**-Drehwinkels:

![Positives Gamma neigt das Gerät nach rechts.](gamma.png)

Der Gamma-Winkel beträgt 0°, wenn die linke und rechte Seite des Geräts denselben Abstand zur Erdoberfläche haben, und nimmt in Richtung 90° zu, wenn das Gerät nach rechts geneigt wird, und in Richtung -90°, wenn es nach links geneigt wird.
