---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: be48127d1f16af543287cbc54a9d4c6834ce1e30
---

{{HTTPSidebar}}

Der HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Direktive spezifiziert gültige Quellen für JavaScript Inline-Event-Handler.

Diese Direktive spezifiziert nur gültige Quellen für Inline-Skript-Event-Handler wie `onclick`. Sie gilt nicht für andere JavaScript-Quellen, die die Ausführung von Skripten auslösen können, wie z.B. URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, und [XSLT-Stile](/de/docs/Web/XSLT).
(Gültige Quellen können für alle JavaScript-Skript-Quellen mit {{CSP("script-src")}}, oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}} spezifiziert werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Ist diese Direktive nicht vorhanden, sucht der Benutzeragent nach der {{CSP("script-src")}}-Direktive, und wenn beide fehlen, fällt er auf die <code>default-src</code>-Direktive zurück.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src-attr 'none';
Content-Security-Policy: script-src-attr <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie zu einem der angegebenen Quellen-Ausdrücke passen.

    Quellen-Ausdrücke werden als Schlüsselwortwerte oder URL-Muster angegeben: Die Syntax für jeden Quellen-Ausdruck ist in [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources) beschrieben.

`script-src-attr` kann zusammen mit {{CSP("script-src")}} verwendet werden und wird diese Direktive für Prüfungen an Inline-Handlern überschreiben:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

## Beispiele

### Verstoßfall

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…wird der folgende Inline-Event-Handler blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie Inline-Event-Handler generell durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen sollten:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
