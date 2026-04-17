---
title: "`dir` HTML-Globalattribut"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`dir`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Textausrichtung des Elements angibt.

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

Es kann die folgenden Werte annehmen:

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, das den Benutzeragenten entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Element analysiert, bis es ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten aus Benutzereingaben oder externen Daten.

Wenn nicht angegeben, wird der Wert vom Elternelement [geerbt](#vererbung).

Dieses Attribut kann von den CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textausrichtung semantisch mit dem Inhalt und nicht mit der Darstellung verbunden ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wann immer möglich. Auf diese Weise wird der Text korrekt angezeigt, selbst in einem Browser, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.

## Vererbung

Wenn ein Element kein `dir` Attribut hat, erbt es den `dir` Wert von seinem {{Glossary("Node/DOM", "Elternknoten")}}, welcher wiederum von seinem Elternteil erben kann, und so weiter.

## Nutzungshinweise

Ein Bild kann seine `dir` Eigenschaft auf `"rtl"` setzen, in diesem Fall werden die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert.

Wenn eine Tabelle ihre `dir` Eigenschaft auf `"rtl"` setzt, wird die Reihenfolge der Spalten von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element zwingend erforderlich, da es eine andere semantische Bedeutung hat.

Dieses Attribut wird vom {{ HTMLElement("bdi") }}-Element _nicht_ geerbt. Wenn nicht gesetzt, ist sein Wert `auto`.

Browser können es Benutzern ermöglichen, die Textausrichtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}-Elementen zu ändern, um beim Verfassen von Inhalten zu helfen. Chrome und Safari bieten eine Option zur Ausrichtung im Kontextmenü der Eingabefelder. Firefox verwendet <kbd>Strg</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Umschalt</kbd> + <kbd>X</kbd> in einem `<textarea>`, um die Textrichtung umzuschalten. Diese Funktionen schalten den `dir` Attributwert zwischen `ltr` und `rtl` um.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
