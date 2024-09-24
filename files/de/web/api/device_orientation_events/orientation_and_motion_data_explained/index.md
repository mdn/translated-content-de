---
title: Orientierung und Bewegungsdaten erklärt
slug: Web/API/Device_orientation_events/Orientation_and_motion_data_explained
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Bei der Verwendung von Orientierungs- und Bewegungsevents ist es wichtig zu verstehen, was die vom Browser bereitgestellten Werte bedeuten. Dieser Artikel bietet Details zu den verwendeten Koordinatensystemen und wie Sie diese nutzen können.

## Über Koordinatenrahmen

Ein **Koordinatenrahmen** ist ein System, in dem die Ausrichtung der drei Achsen (X, Y und Z) in Bezug auf ein Objekt definiert ist. Beim Einsatz von Orientierungs- und Bewegungsevents sind zwei Koordinatenrahmen zu berücksichtigen:

### Erdkoordinatenrahmen

Der Erdkoordinatenrahmen ist der auf das Zentrum der Erde fixierte Koordinatenrahmen; das heißt, die Achsen sind basierend auf der Schwerkraft und der standardmäßigen magnetischen Nordausrichtung ausgerichtet. Wir verwenden Großbuchstaben ("X", "Y" und "Z"), um die Achsen des Erdkoordinatenrahmens zu beschreiben.

- Die **X**-Achse verläuft entlang der Erdoberfläche, senkrecht zur Y-Achse und positiv nach Osten (und daher negativ nach Westen).
- Die **Y**-Achse verläuft entlang der Erdoberfläche, ist positiv nach Norden (d. h. zum Nordpol, nicht zum magnetischen Norden) und negativ nach Süden.
- Die **Z**-Achse ist senkrecht zur Erdoberfläche; man kann sich diese als eine Linie zwischen dem Gerät und dem Zentrum der Erde vorstellen. Der Wert der Z-Koordinate ist positiv nach oben (vom Zentrum der Erde weg) und negativ nach unten (zum Zentrum der Erde hin).

### Gerätekoordinatenrahmen

Der Gerätekoordinatenrahmen ist der Koordinatenrahmen, der auf das Zentrum des Geräts fixiert ist. Wir verwenden Kleinbuchstaben ("x", "y" und "z"), um die Achsen des Gerätekoordinatenrahmens zu beschreiben.

![Zeichnung, die die drei Achsen eines mobilen Geräts darstellt](axes.png)

- Die **x**-Achse liegt in der Ebene des Bildschirms und ist positiv nach rechts und negativ nach links.
- Die **y**-Achse liegt in der Ebene des Bildschirms und ist positiv nach oben und negativ nach unten.
- Die **z**-Achse ist senkrecht zum Bildschirm oder zur Tastatur und ist positiv nach außen vom Bildschirm weg.

> [!NOTE]
> Auf einem Telefon oder Tablet wird die Ausrichtung des Geräts immer im Verhältnis zur Standardorientierung des Bildschirms betrachtet; dies ist die "Portrait"-Ausrichtung bei den meisten Geräten. Auf einem Laptop-Computer wird die Ausrichtung im Verhältnis zur Tastatur betrachtet. Wenn Sie Änderungen in der Geräteausrichtung erfassen möchten, um dies auszugleichen, können Sie das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis verwenden.

## Über Rotation

Die Rotation wird um eine gegebene Achse in Bezug auf den Gradunterschied zwischen dem Gerätekoordinatenrahmen und dem Erdkoordinatenrahmen beschrieben und in Grad gemessen.

### Alpha

Die Rotation um die z-Achse – also das Verdrehen des Geräts – führt zur Änderung des **Alpha**-Rotationswinkels:

![Positiver Alpha-Wert dreht das Gerät gegen den Uhrzeigersinn.](alpha.png)

Der Alpha-Winkel beträgt 0°, wenn die Oberseite des Geräts direkt auf den Nordpol der Erde zeigt, und erhöht sich, wenn das Gerät gegen den Uhrzeigersinn gedreht wird. Somit entspricht 90° Westen, 180° Süden und 270° Osten.

### Beta

Die Rotation um die x-Achse – also das Neigen des Geräts weg vom oder zum Benutzer hin – führt zur Änderung des **Beta**-Rotationswinkels:

![Positiver Beta-Wert kippt das Gerät nach vorne zum Benutzer hin.](beta2.png)

Der Beta-Winkel beträgt 0°, wenn die Ober- und Unterseite des Geräts den gleichen Abstand zur Erdoberfläche haben; er erhöht sich auf 180°, wenn das Gerät nach vorne zum Benutzer hin gekippt wird, und verringert sich auf -180°, wenn es nach hinten vom Benutzer weg gekippt wird.

### Gamma

Die Rotation um die y-Achse – also das Kippen des Geräts nach links oder rechts – führt zur Änderung des **Gamma**-Rotationswinkels:

![Positiver Gamma-Wert kippt das Gerät nach rechts.](gamma.png)

Der Gamma-Winkel beträgt 0°, wenn die linke und rechte Seite des Geräts den gleichen Abstand zur Erdoberfläche haben, und erhöht sich auf 90°, wenn das Gerät nach rechts gekippt wird, und auf -90°, wenn es nach links gekippt wird.
