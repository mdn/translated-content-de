---
title: rel
slug: Web/SVG/Reference/Attribute/rel
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das Attribut **`rel`** definiert eine Liste eindeutiger, durch Leerzeichen getrennter Werte, die die Beziehung zwischen einer verlinkten Ressource und dem aktuellen Dokument beschreiben. Diese Schlüsselwörter haben eine semantische Bedeutung. Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

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

Das Attribut `rel` akzeptiert eine durch Leerzeichen getrennte Liste von Schlüsselwörtern als Wert. Häufig verwendete Schlüsselwörter sind:

- `alternate`
  - : Verweist auf eine alternative Darstellung des verlinkten Dokuments.
- `author`
  - : Verweist auf den Autor des Dokuments.
- `bookmark`
  - : Stellt eine dauerhafte URL bereit, um den Abschnitt als Lesezeichen zu speichern, mit dem das verlinkende Element am engsten verbunden ist.
- `external`
  - : Gibt an, dass das referenzierte Dokument nicht Teil der aktuellen Website ist.
- `help`
  - : Verweist auf ein kontextbezogenes Hilfedokument.
- `license`
  - : Verweist auf die Urheberrechtslizenz, die für das aktuelle Dokument gilt.
- `nofollow`
  - : Verweist auf ein Dokument, das nicht ausdrücklich empfohlen wird, oder weist Suchmaschinen an, diesem Link nicht zu folgen.
- `noopener`
  - : Öffnet den Link, ohne dem Zielkontext Zugriff auf das Dokument (`window.opener`) zu gewähren.
- `noreferrer`
  - : Öffnet den Link, ohne dem Ziel den {{HTTPHeader("Referer")}}-Header bereitzustellen.
- `opener`
  - : Das Gegenteil von `noopener`. Öffnet den Link und gewährt dem Zielkontext Zugriff auf das Dokument (`window.opener`).
- `privacy-policy`
  - : Gibt an, dass das referenzierte Dokument die Datenschutzerklärung der aktuellen Website ist.
- `search`
  - : Gibt an, dass das referenzierte Dokument eine Oberfläche speziell für die Suche innerhalb des Dokuments enthält.
- `tag`
  - : Gibt ein Tag (eine Kennzeichnung) an, das für das aktuelle Dokument gilt.
- `terms-of-service`
  - : Gibt an, dass das referenzierte Dokument Vereinbarungen zwischen dem Anbieter des aktuellen Dokuments und potenziellen Nutzern enthält.
- `prev`
  - : Gibt an, dass das Dokument Teil einer Reihe ist und der Link auf das vorherige Dokument verweist.
- `next`
  - : Das Gegenteil von `prev`. Gibt an, dass das Dokument Teil einer Reihe ist und der Link auf das nächste Dokument verweist.

## Beispiel

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" rel="external noopener">
    <text x="5" y="15">Website</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
- {{HTMLElement("a")}}
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
