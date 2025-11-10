---
title: autofocus
slug: Web/SVG/Reference/Attribute/autofocus
l10n:
  sourceCommit: f806e0ff9b3ef7f633533b4c6c1657e9430e2f06
---

Das **`autofocus`** globale SVG-Attribut definiert ein fokussierbares Element, das fokussiert werden soll, nachdem es mit einem Dokument verbunden wurde. Das Attribut hat keine Wirkung, wenn das Element nicht bereits fokussierbar ist.

Das `autofocus`-Attribut hat ein HTML-Gegenstück: [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus). Nicht mehr als ein Element im Dokument darf das `autofocus`-Attribut haben. Wenn es auf mehrere Elemente angewendet wird, erhält das erste den Fokus.

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code><a href="/de/docs/Glossary/Boolean/HTML">boolean attribute</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>(none)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte verweisen Sie bitte auf das [HTML-`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut.

## Barrierefreiheitsbedenken

Ein automatisches Fokussieren auf ein SVG kann Menschen mit Sehbehinderungen, die Bildschirmlesetechnologie nutzen, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer ohne vorherige Warnung zum fokussierbaren Element.

Verwenden Sie das `autofocus`-Attribut mit Bedacht im Hinblick auf Barrierefreiheit. Ein automatisches Fokussieren auf ein Element kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser den {{Glossary("accessible_name", "zugänglichen Namen")}} des fokussierten Elements ankündigt, wird der Bildschirmleser nichts ankündigen, bevor das Element angezeigt wird, das möglicherweise mehr Kontext bietet, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den Kontext verpassen, der durch den vorhergehenden Inhalt geschaffen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("tabindex")}} Attribut
- HTML [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut
- [`SVGElement.autofocus`](/de/docs/Web/API/SVGElement/autofocus)
