---
title: rel
slug: Web/SVG/Reference/Attribute/rel
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`rel`** definiert eine eindeutige, durch Leerzeichen getrennte Liste von Werten, die eine Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument beschreiben. Diese Schlüsselwörter haben eine semantische Bedeutung. Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Beispiel

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" rel="external noopener">
    <text x="5" y="15">Website</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Durch Leerzeichen getrennte Liste von Schlüsselwörtern</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Das Attribut `rel` nimmt eine durch Leerzeichen getrennte Liste von Schlüsselwörtern als Wert an. Häufig verwendete Schlüsselwörter sind:

- `alternate`
  - : Stellt eine alternative Darstellung des verlinkten Dokuments bereit.
- `author`
  - : Stellt einen Link zum Autor des Dokuments bereit.
- `bookmark`
  - : Stellt eine dauerhafte URL bereit, mit der der Abschnitt als Lesezeichen gespeichert werden kann, dem das verlinkende Element am nächsten zugeordnet ist.
- `external`
  - : Gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist.
- `help`
  - : Verlinkt auf ein kontextbezogenes Hilfedokument.
- `license`
  - : Verlinkt auf die Urheberrechtslizenz, die für das aktuelle Dokument gilt.
- `nofollow`
  - : Verlinkt auf ein Dokument, für das keine Empfehlung ausgesprochen wird, oder weist Suchmaschinen an, diesem Link nicht zu folgen.
- `noopener`
  - : Öffnet den Link, ohne dem Zielkontext über (`window.opener`) Zugriff auf das Dokument zu gewähren.
- `noreferrer`
  - : Öffnet den Link, ohne dem Ziel den Header {{HTTPHeader("Referer")}} bereitzustellen.
- `opener`
  - : Das Gegenteil von `noopener`. Öffnet den Link und gewährt dem Zielkontext über (`window.opener`) Zugriff auf das Dokument.
- `privacy-policy`
  - : Gibt an, dass das referenzierte Dokument die Datenschutzerklärung der aktuellen Website ist.
- `search`
  - : Gibt an, dass das referenzierte Dokument eine Schnittstelle speziell für die Suche im Dokument enthält.
- `tag`
  - : Weist dem aktuellen Dokument ein Tag (eine Kennzeichnung) zu.
- `terms-of-service`
  - : Gibt an, dass das referenzierte Dokument Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und potenziellen Nutzern enthält.
- `prev`
  - : Gibt an, dass das Dokument Teil einer Reihe ist und der Link auf das vorherige Dokument verweist.
- `next`
  - : Das Gegenteil von `prev`. Gibt an, dass das Dokument Teil einer Reihe ist und der Link auf das nächste Dokument verweist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
- {{HTMLElement("a")}}
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
