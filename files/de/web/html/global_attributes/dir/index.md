---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufgezähltes Attribut](/de/docs/Glossary/Enumerated), das die Richtung des Textes eines Elements angibt.

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

Es kann folgende Werte haben:

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, was dem Benutzeragenten die Entscheidung überlässt. Es verwendet einen einfachen Algorithmus, bei dem die Zeichen im Element analysiert werden, bis ein Zeichen mit starker Richtung gefunden wird, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten aus Benutzereingaben oder externen Daten.

Wenn nicht angegeben, wird der Wert vom [übergeordneten Element](#vererbung) geerbt.

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Richtung des Textes semantisch mit seinem Inhalt und nicht mit seiner Darstellung zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der entsprechenden CSS-Eigenschaften verwenden, wenn möglich. Auf diese Weise wird der Text korrekt angezeigt, selbst in einem Browser, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, wird es den `dir`-Wert von seinem [übergeordneten Knoten](/de/docs/Glossary/Node/DOM) erben, der wiederum diesen von seinem übergeordneten Element erben kann, und so weiter.

## Verwendungshinweise

Ein Bild kann seine `dir`-Eigenschaft auf `"rtl"` setzen, in diesem Fall werden die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert.

Wenn eine Tabelle ihr `dir` auf `"rtl"` gesetzt hat, wird die Reihenfolge der Spalten von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, da es eine andere semantische Bedeutung hat.

Dieses Attribut wird nicht vom {{ HTMLElement("bdi") }}-Element geerbt. Wenn nicht gesetzt, ist sein Wert `auto`.

Browser können Benutzern erlauben, die Richtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}s zu ändern, um das Erstellen von Inhalten zu unterstützen. Chrome und Safari bieten eine Richtungsoption im Kontextmenü von Eingabefeldern. Firefox verwendet <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>, aktualisiert aber den Wert des `dir`-Attributs NICHT.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.dir")}} das dieses Attribut widerspiegelt.
