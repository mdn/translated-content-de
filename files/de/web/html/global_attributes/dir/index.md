---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufgezähltes](/de/docs/Glossary/Enumerated) Attribut, das die Richtung des Textes des Elements angibt.

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

Es kann die folgenden Werte haben:

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, wodurch der Benutzeragent entscheidet. Es verwendet einen einfachen Algorithmus, indem es die Zeichen im Element parst, bis es ein Zeichen mit einer starken Direktionalität findet, und wendet dann diese Direktionalität auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Direktionalität verwendet werden, wie Daten aus Benutzereingaben oder externen Daten.

Wenn nicht angegeben, wird der Wert vom [Elternelement](#vererbung) geerbt.

Dieses Attribut kann von den CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textrichtung semantisch mit dem Inhalt und nicht mit der Präsentation zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden, wenn möglich. Auf diese Weise wird der Text auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder in dem CSS deaktiviert ist.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert, der auf seinem [übergeordneten Knoten](/de/docs/Glossary/Node/DOM) festgelegt ist, das ihn wiederum von seinem übergeordneten Element erben kann, und so weiter.

## Verwendungshinweise

Ein Bild kann sein `dir`-Attribut auf `"rtl"` gesetzt haben, in welchem Fall die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert werden.

Wenn eine Tabelle ihr `dir`-Attribut auf `"rtl"` setzt, wird die Spaltenreihenfolge von rechts nach links arrangiert.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, wo es eine andere semantische Bedeutung hat.

Dieses Attribut wird _nicht_ vom {{ HTMLElement("bdi") }}-Element geerbt. Wenn es nicht gesetzt ist, ist sein Wert `auto`.

Browser können es den Benutzern erlauben, die Schreibrichtung von {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Feldern zu ändern, um die Inhaltserstellung zu unterstützen. Chrome und Safari bieten eine Option für die Schreibrichtung im Kontextmenü der Eingabefelder. Firefox verwendet <kbd>Strg</kbd>/<kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>X</kbd>, aktualisiert jedoch NICHT den Wert des `dir`-Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
