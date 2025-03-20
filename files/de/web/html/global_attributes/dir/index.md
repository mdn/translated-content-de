---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: d68cfd06575158736a37dcacc970cf909d009469
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das die Schreibrichtung des Textes eines Elements angibt.

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

Es kann folgende Werte haben:

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, was dem Benutzeragenten die Entscheidung überlässt. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Element analysiert, bis es ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten aus Benutzereingaben oder externe Daten.

Wenn nicht spezifiziert, wird der Wert vom [übergeordneten Element](#vererbung) geerbt.

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }}, falls eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt, überschrieben werden.

Da die Schreibrichtung des Textes semantisch mit seinem Inhalt und nicht mit seiner Präsentation verknüpft ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wenn möglich. So wird sichergestellt, dass der Text auch in einem Browser ohne CSS-Unterstützung oder mit deaktiviertem CSS korrekt angezeigt wird.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert vom {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der ihn wiederum von seinem übergeordneten Element erben kann, und so weiter.

## Nutzungshinweise

Ein Bild kann seine `dir`-Eigenschaft auf `"rtl"` setzen, wobei die HTML-Attribute `title` und `alt` im Format `"rtl"` definiert werden.

Wenn eine Tabelle ihr `dir` auf `"rtl"` setzt, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, da es hier eine andere semantische Bedeutung hat.

Dieses Attribut wird _nicht_ vom {{ HTMLElement("bdi") }}-Element vererbt. Wenn es nicht gesetzt ist, ist sein Wert `auto`.

Browser erlauben es möglicherweise den Benutzern, die Schreibrichtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}s zu ändern, um beim Erstellen von Inhalten zu helfen. Chrome und Safari bieten eine Richtungsoption im Kontextmenü der Eingabefelder. Firefox verwendet <kbd>Strg</kbd>/<kbd>Befehlstaste</kbd> + <kbd>Umschalt</kbd> + <kbd>X</kbd>, aktualisiert den `dir`-Attributwert jedoch NICHT.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
