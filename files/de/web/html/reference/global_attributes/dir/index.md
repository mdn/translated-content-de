---
title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Richtung des Textes des Elements angibt.

{{InteractiveExample("HTML Demo: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>

<hr />

<p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

Es kann die folgenden Werte haben:

- `ltr`, was _links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, das den Benutzeragenten entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, während es die Zeichen innerhalb des Elements analysiert, bis es ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten, die aus Benutzereingaben oder externen Daten stammen.

Wenn nicht angegeben, wird der Wert vom übergeordneten Element [geerbt](#vererbung).

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Richtung des Textes semantisch mit seinem Inhalt und nicht mit seiner Darstellung verbunden ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der entsprechenden CSS-Eigenschaften verwenden, wann immer dies möglich ist. So wird sichergestellt, dass der Text auch in einem Browser, der kein CSS unterstützt oder in dem das CSS deaktiviert wurde, korrekt angezeigt wird.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert von seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der ihn wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

## Nutzungshinweise

Ein Bild kann seine `dir`-Eigenschaft auf `"rtl"` setzen, wobei die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert werden.

Wenn eine Tabelle ihr `dir` auf `"rtl"` setzt, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element verpflichtend, da es eine andere semantische Bedeutung hat.

Dieses Attribut wird vom {{ HTMLElement("bdi") }}-Element _nicht_ vererbt. Wenn es nicht gesetzt ist, lautet der Wert `auto`.

Browser können es Nutzern ermöglichen, die Richtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}-Elementen zu ändern, um bei der Inhaltserstellung zu helfen. Chrome und Safari bieten eine Richtungsoption im Kontextmenü der Eingabefelder. Firefox verwendet <kbd>Strg</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>, aktualisiert jedoch NICHT den Wert des `dir`-Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
