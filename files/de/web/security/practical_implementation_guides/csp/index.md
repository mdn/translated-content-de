---
title: Content Security Policy (CSP) Implementierung
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) bietet eine detaillierte Kontrolle über die Quellen, von denen Ressourcen auf einer Website geladen werden können.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese treten im Allgemeinen aufgrund mangelnder Kontrolle und Bewusstsein über die Quellen auf, von denen Website-Ressourcen geladen werden. Dieses Problem wird schwieriger zu verwalten, wenn Websites größer und komplexer werden und zunehmend auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch das Stoppen der Einbettung Ihrer Website in {{htmlelement("iframe")}}-Elemente. Dies wird mit der CSP-Richtlinie [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) erreicht.
- Verhinderung von {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffen durch das Hochstufen von HTTP-Verbindungen zu HTTPS. Dies wird durch die CSP-Richtlinie [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) unterstützt. Weitere Details finden Sie in der [HSTS Implementierung](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation).

## Lösung

Die Implementierung einer robusten CSP ist der beste Weg, um XSS-Schwachstellen zu verhindern.

Der Hauptvorteil von CSP besteht darin, dass die Verwendung von unsicherem Inline-JavaScript deaktiviert wird. Inline-JavaScript, sei es reflektiert oder gespeichert, ermöglicht es unsachgemäß entkoppelte Benutzereingaben, Code zu generieren, der vom Webbrowser als JavaScript interpretiert wird. Durch die Verwendung von CSP zur Deaktivierung von Inline-JavaScript können fast alle XSS-Angriffe auf Ihre Website eliminiert werden.

Die Deaktivierung von Inline-JavaScript bedeutet, dass _alle_ JavaScript von externen Dateien über {{htmlelement("script")}}-Elemente mit `src`-Attributen geladen werden müssen. Inline-Event-Handler-Attribute wie `onclick` und JavaScript, das direkt innerhalb von `<script>`-Tags eingefügt wird, funktionieren nicht mehr. Darüber hinaus kann CSP auch interne Stylesheets (in {{htmlelement("style")}}-Tags) und Inline-Stile (unter Verwendung des [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs) deaktivieren.

Daher sollten Websites sorgfältig gestaltet werden, um sicherzustellen, dass CSP weniger Probleme verursacht und einfacher zu implementieren ist.

CSP kann auch verwendet werden, um eine granulare Kontrolle über Folgendes bereitzustellen:

- Laden anderer Ressourcen wie Bilder, Video und Audio (die {{Glossary("Fetch_directive", "Fetch-Richtlinien")}} steuern das Laden von Ressourcen).
- [Web-Worker](/de/docs/Web/API/Web_Workers_API) (über {{Glossary("Document_directive", "Dokumentrichtlinien")}}).
- Eingebettete Inhalte (z.B. {{htmlelement("iframe")}}).
- Navigations- / Formular-Übermittlungsziele (über {{Glossary("Navigation_directive", "Navigationsrichtlinien")}}).

### Schritte zur Implementierung von CSP

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy` Header implementieren, wird empfohlen, diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen. So können Sie sehen, ob Verstöße gegen diese Richtlinie aufgetreten wären. Dieser Test erfordert die Verwendung von `report-to` (oder dem veralteten `report-uri`), wie unten erläutert.

1. Beginnen Sie mit einer Richtlinie von `default-src https:`. Dies ist ein großartiges erstes Ziel, da es Inline-Code deaktiviert und Browser zwingt, HTTPS zum Laden von Ressourcen zu verwenden. Es ermöglicht Ihnen auch, mit der Ermittlung der Ressourcen zu beginnen, die aufgrund der Richtlinie nicht geladen werden können. [`default-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) dient als Fallback für die anderen CSP-Fetch-Richtlinien.
2. Als nächstes beginnen Sie, die Richtlinie spezifischer zu gestalten, um die benötigten Elemente zuzulassen und unerwünschte zu blockieren. Sie könnten das Aufgabengebiet der Richtlinien zunächst mit einer recht strikt abgeschlossenen Richtlinie erweitern wie `default-src 'none'; form-action 'self'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self';`.
3. Sie können dann bestimmte Quellen hinzufügen, die während des Tests hervorgehoben wurden, z.B. `style-src 'self' https://example.com/`.
4. API-Endpunkte sollten eine Richtlinie verwenden, die das Laden und Einbetten von Ressourcen deaktiviert, z.B. `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'`.
5. Für vorhandene Websites mit umfangreichem Codebestand, bei denen es zu viel Arbeit wäre, Inline-Skripte zu deaktivieren, können einige der CSP-Funktionen verwendet werden, die die Einführung auf Legacy-Sites erleichtern sollen. Beispielsweise erfordert die [`nonce-*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-) Direktive, dass ein `<script>` im `nonce`-Attribut dieselbe Nonce angibt, damit das Laden erfolgreich ist, während die [`strict-dynamic`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#strict-dynamic) Direktive das Vertrauen, das einer begleitenden Nonce entgegengebracht wird, auf andere Skripte, die das Top-Level-Skript lädt, erweitert.

Beachten Sie die folgenden Punkte:

- Wenn Sie den `Content-Security-Policy` Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv) Element enthalten. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint.
- Vorsicht ist bei `data:` URIs geboten, da diese innerhalb von `script-src` und `object-src` (oder `default-src`) unsicher sind.
- Ebenso kann die Verwendung von `script-src 'self'` für Websites mit JSONP-Endpunkten unsicher sein. Diese Websites sollten einen `script-src` verwenden, der den Pfad zu ihrem JavaScript-Quellenordner enthält.
- Websites sollten die {{Glossary("Reporting_directive", "Berichtsrichtlinien")}} [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu senden (angegeben im {{httpheader("Reporting-Endpoints")}} Header im Fall von `report-to`). Auf diese Weise können CSP-Verstöße schnell erkannt und repariert werden.

  > [!NOTE] > `report-to` wird gegenüber dem veralteten `report-uri` bevorzugt; beide werden jedoch weiterhin benötigt, da `report-to` noch keine vollständige Unterstützung durch alle Browser hat.

- Schließen Sie keine unsicheren Quellen in Ihre CSP ein. Beispiele hierfür sind `unsafe-inline` oder `data:` URIs in `script-src` und zu weit gefasste Quellen oder Formulareinreichungsziele.
- Sofern Websites nicht die Fähigkeit benötigen, Plugins auszuführen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
- Wenn Sie SVG-Sprites, die in externen Dateien definiert sind, über das [`<use>`](/de/docs/Web/SVG/Element/use) Element einbetten, z.B.:

  ```svg
  <svg>
    <use href="/images/icons.svg#icon"/>
  </svg>
  ```

  werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'` Richtlinie festgelegt haben. Firefox behandelt das SVG nicht wie andere Browser als eingebettetes Bild, daher wird `img-src 'self'` sie nicht laden lassen. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox laden (siehe [Bug 1773976](https://bugzil.la/1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für mehr Informationen).

  Alternativ, wenn die `default-src 'none'` Richtlinie eine feste Vorgabe ist, können Sie die SVG-Sprites inline in der HTML-Seite einfügen — siehe [CSP: default-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#firefox_default-src_none_svg_sprite_blocking_issue) für ein Beispiel.

## Beispiele

Deaktivieren Sie unsicheres Inline/Eval und erlauben Sie nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS:

```http
Content-Security-Policy: default-src https:
```

Machen Sie dasselbe, aber mit einem `<meta>`-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Deaktivieren Sie die Verwendung unsicherer Inline/Eval und erlauben Sie alles andere außer der Ausführung von Plugins:

```http
Content-Security-Policy: default-src *; object-src 'none'
```

Deaktivieren Sie unsichere Inline/Eval-Skripte und Plugins, laden Sie nur Skripte und Stylesheets vom selben Ursprung, erlauben Sie das Laden von Schriftarten von `https://fonts.gstatic.com` und erlauben Sie das Laden von Bildern vom selben Ursprung und `https://i.imgur.com`. Websites sollten auf solche Richtlinien abzielen:

```http-nolint
Content-Security-Policy: default-src 'none'; font-src https://fonts.gstatic.com;
  img-src 'self' https://i.imgur.com; object-src 'none'; script-src 'self';
  style-src 'self'
```

Erlauben Sie Legacy-Websites das sichere Laden von Skripten, mit einem erhöhten Maß an Vertrauen, das durch eine Nonce bereitgestellt wird:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-2726c7f26c'
```

Implementieren Sie die Richtlinie noch nicht; berichten Sie nur über die Verstöße, die aufgetreten wären:

```http-nolint
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"

Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-violation-report-endpoint/;
  report-to csp-endpoint;
```

Deaktivieren Sie das Laden und Einbetten von Ressourcen. APIs sollten eine solche Richtlinie verwenden:

```http
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
```

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
