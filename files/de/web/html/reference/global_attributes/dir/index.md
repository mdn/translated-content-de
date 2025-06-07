---
title: HTML dir globales Attribut
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Textausrichtung des Elements angibt.

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
- `auto`, das dem Benutzeragenten die Entscheidung überlässt. Es verwendet einen einfachen Algorithmus, bei dem die Zeichen im Element durchlaufen werden, bis ein Zeichen mit einer starken Richtung gefunden wird. Diese Richtung wird dann auf das gesamte Element angewendet.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten aus Benutzereingaben oder externen Daten.

Wenn nicht angegeben, wird der Wert vom übergeordneten Element [geerbt](#vererbung).

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textausrichtung semantisch mit dem Inhalt und nicht mit der Präsentation in Zusammenhang steht, wird empfohlen, dass Webentwickler dieses Attribut verwenden, anstatt der verwandten CSS-Eigenschaften, wenn möglich. So wird der Text auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder deaktiviert hat.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert von seinem {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der ihn wiederum von seinem Elternteil erben kann, und so weiter.

## Verwendungshinweise

Ein Bild kann sein `dir`-Attribut auf `"rtl"` setzen, in diesem Fall werden die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert.

Wenn eine Tabelle ihr `dir` auf `"rtl"` eingestellt hat, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element zwingend erforderlich, da es dort eine andere semantische Bedeutung hat.

Dieses Attribut wird vom {{ HTMLElement("bdi") }}-Element _nicht_ vererbt. Wenn es nicht gesetzt ist, lautet sein Wert `auto`.

Browser ermöglichen es Benutzern möglicherweise, die Richtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}s zu ändern, um die Inhaltserstellung zu unterstützen. Chrome und Safari bieten eine Optionsmöglichkeit im Kontextmenü von Eingabefeldern. Firefox verwendet <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>, aktualisiert jedoch NICHT den Wert des `dir`-Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Anleitung für verschiedene Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
