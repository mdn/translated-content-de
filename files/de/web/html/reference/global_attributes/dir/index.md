---
title: HTML-Attribut „dir“
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: d4a2b8b308d25aa471da5d5241962a6689a58bc6
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "Aufzählungs-")}} Attribut, das die Textausrichtung des Elements angibt.

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

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, bei dem der Benutzeragent entscheidet. Es verwendet einen einfachen Algorithmus, indem es die Zeichen im Element parst, bis es ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Ausrichtung verwendet werden, wie Daten aus Benutzereingaben oder externe Daten.

Wenn nicht angegeben, wird der Wert vom übergeordneten Element [geerbt](#vererbung).

Dieses Attribut kann von den CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textausrichtung semantisch mit seinem Inhalt und nicht mit seiner Präsentation verknüpft ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden, wenn möglich. Auf diese Weise wird der Text korrekt angezeigt, auch in einem Browser, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert von seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}}, welcher wiederum von seinem übergeordneten Element erben kann, und so weiter.

## Nutzungshinweise

Ein Bild kann das `dir`-Attribut auf `"rtl"` gesetzt haben, wobei die HTML-Attribute `title` und `alt` entsprechend als `"rtl"` formatiert und definiert werden.

Wenn eine Tabelle ihr `dir` auf `"rtl"` gesetzt hat, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, da es dort eine andere semantische Bedeutung hat.

Dieses Attribut wird _nicht_ vom {{ HTMLElement("bdi") }}-Element geerbt. Wenn es nicht gesetzt ist, ist sein Wert `auto`.

Browser können es Benutzern erlauben, die Ausrichtung von {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elementen zu ändern, um das Verfassen von Inhalten zu unterstützen. Chrome und Safari bieten im Kontextmenü von Eingabefeldern eine Ausrichtungsoption. Firefox ermöglicht es, durch Drücken von <kbd>Ctrl</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Shift</kbd> + <kbd>X</kbd> innerhalb eines `<textarea>` die Textrichtung zu wechseln und aktualisiert dabei auch den Wert des `dir`-Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
