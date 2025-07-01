---
title: HTML dir global attribute
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 4af8e714125b2c0892fbda8c1b7c34e807572e28
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

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, das dem Benutzeragenten überlassen wird. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Inneren des Elements analysiert, bis es ein Zeichen mit starker Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten, die aus Benutzereingaben oder externen Daten stammen.

Wenn nicht angegeben, wird der Wert vom Elternelement [geerbt](#vererbung).

Dieses Attribut kann von den CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Richtung des Textes semantisch mit seinem Inhalt und nicht mit seiner Darstellung zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften nutzen, wenn möglich. Auf diese Weise wird der Text auch in einem Browser, der CSS nicht unterstützt oder CSS deaktiviert hat, korrekt angezeigt.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert, der auf seinem {{Glossary("Node/DOM", "Elternknoten")}} gesetzt ist, der wiederum diesen von seinem Elternteil erben kann, und so weiter.

## Verwendungshinweise

Ein Bild kann sein `dir`-Attribut auf `"rtl"` gesetzt haben, wobei die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert werden.

Wenn eine Tabelle ihr `dir` auf `"rtl"` gesetzt hat, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, wo es eine andere semantische Bedeutung hat.

Dieses Attribut wird vom {{ HTMLElement("bdi") }}-Element _nicht_ geerbt. Wenn es nicht gesetzt ist, beträgt sein Wert `auto`.

Browser können Benutzern erlauben, die Richtung von {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elementen zu ändern, um die Inhaltsbearbeitung zu unterstützen. Chrome und Safari bieten eine Richtungsoption im Kontextmenü der Eingabefelder. Firefox verwendet <kbd>Strg</kbd> (Windows)/<kbd>Befehl</kbd> (macOS) + <kbd>Umschalt</kbd> + <kbd>X</kbd> innerhalb eines `<textarea>`, um die Textrichtung umzuschalten. Diese Funktionen wechseln den `dir`-Attributwert zwischen `ltr` und `rtl`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
