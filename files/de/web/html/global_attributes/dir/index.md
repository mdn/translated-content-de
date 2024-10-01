---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das die Richtung des Textes des Elements angibt.

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

Es kann die folgenden Werte haben:

- `ltr`, was _links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, was den Benutzeragenten entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, der die Zeichen im Element analysiert, bis es ein Zeichen mit starker Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten, die durch Benutzereingaben oder externe Daten kommen.

Wenn nicht spezifiziert, wird der Wert [vom Elternelement](#vererbung) geerbt.

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textausrichtung semantisch mit dem Inhalt und nicht mit der Präsentation verbunden ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden, wenn möglich. Auf diese Weise wird der Text auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder CSS deaktiviert hat.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert von seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der wiederum seinen Wert möglicherweise von seinem übergeordneten Element erbt usw.

## Anwendungsnotizen

Ein Bild kann seine `dir`-Eigenschaft auf `"rtl"` setzen, wobei in diesem Fall die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert werden.

Wenn eine Tabelle ihr `dir` auf `"rtl"` gesetzt hat, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, wo es eine andere semantische Bedeutung hat.

Dieses Attribut wird vom {{ HTMLElement("bdi") }}-Element _nicht_ vererbt. Wenn es nicht gesetzt ist, lautet sein Wert `auto`.

Browser können es Benutzern ermöglichen, die Richtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}s zu ändern, um beim Erstellen von Inhalten zu unterstützen. Chrome und Safari bieten im Kontextmenü von Eingabefeldern eine Optionsmöglichkeit zur Richtungsänderung. Firefox verwendet <kbd>Strg</kbd>/<kbd>Befehl</kbd> + <kbd>Umschalt</kbd> + <kbd>X</kbd>, aktualisiert aber NICHT den Wert des `dir`-Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
