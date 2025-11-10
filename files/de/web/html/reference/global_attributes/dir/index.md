---
title: HTML-Attribut dir global
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das die Leserichtung des Textes des Elements angibt.

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
- `auto`, was dem User-Agent die Entscheidung überlässt. Es verwendet einen grundlegenden Algorithmus, der die Zeichen im Element analysiert, bis ein Zeichen mit starker Richtung gefunden wird, und wendet dann diese Leserichtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Leserichtung verwendet werden, wie Daten aus Benutzereingaben oder externe Daten.

Wenn nicht angegeben, wird der Wert vom übergeordneten Element [geerbt](#vererbung).

Dieses Attribut kann von den CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Leserichtung des Textes semantisch mit seinem Inhalt und nicht mit seiner Präsentation verknüpft ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wenn möglich. Auf diese Weise wird der Text auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder wenn CSS deaktiviert ist.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert, der auf seinem {{Glossary("Node/DOM", "Elternknoten")}} festgelegt ist, welches wiederum den Wert von seinem übergeordneten Element erben kann, und so weiter.

## Nutzungshinweise

Ein Bild kann sein `dir`-Eigenschaft auf `"rtl"` setzen, in welchem Fall die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert werden.

Wenn eine Tabelle ihr `dir` auf `"rtl"` gesetzt hat, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, wo es eine andere semantische Bedeutung hat.

Dieses Attribut wird vom {{ HTMLElement("bdi") }}-Element _nicht_ geerbt. Wenn es nicht gesetzt ist, ist sein Wert `auto`.

Browser könnten es Benutzern ermöglichen, die Leserichtung von {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elementen zu ändern, um beim Erstellen von Inhalten zu helfen.
Chrome und Safari bieten eine Lesedirektionsoption im Kontextmenü von Eingabefeldern.
Firefox verwendet <kbd>Strg</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Umschalt</kbd> + <kbd>X</kbd> innerhalb eines `<textarea>`, um die Leserichtung zu wechseln.
Diese Funktionen schalten den `dir`-Attributwert zwischen `ltr` und `rtl` um.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit verschiedenen Leserichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
