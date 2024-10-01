---
title: Implementierung einer Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) bietet eine feingranulare Kontrolle darüber, von welchen Standorten Ressourcen auf einer Website geladen werden können.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese entstehen in der Regel durch mangelnde Kontrolle und Bewusstsein über die Quellen, von denen Website-Ressourcen geladen werden. Dieses Problem wird schwieriger zu verwalten, je größer und komplexer Websites werden und je stärker sie auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch Verhinderung, dass Ihre Seite in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies wird durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) erreicht.
- Verhinderung von {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffen durch das Upgraden aller HTTP-Verbindungen zu HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) unterstützt. Weitere Einzelheiten finden Sie in der [HSTS-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation).

## Lösung

Die Implementierung einer robusten CSP ist der beste Weg, um XSS-Schwachstellen zu verhindern.

Der Hauptvorteil von CSP ergibt sich aus der Deaktivierung der Verwendung von unsicherem Inline-JavaScript. Inline-JavaScript, sei es reflektiert oder gespeichert, ermöglicht es unsachgemäß maskierten Benutzereingaben, Code zu generieren, der vom Webbrowser als JavaScript interpretiert wird. Durch die Verwendung von CSP zur Deaktivierung von Inline-JavaScript können Sie nahezu alle XSS-Angriffe gegen Ihre Website eliminieren.

Das Deaktivieren von Inline-JavaScript bedeutet, dass _alle_ JavaScript von externen Dateien über {{htmlelement("script")}}-Elemente mit `src`-Attributen geladen werden müssen. Inline-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Attributes#event_handler_attributes) wie `onclick` und direkt in `<script>`-Tags eingefügtes JavaScript werden nicht mehr funktionieren. Darüber hinaus kann CSP auch interne Stylesheets (in {{htmlelement("style")}}-Tags) und Inline-Styles (mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut) deaktivieren.

Daher sollten Websites sorgfältig gestaltet werden, um sicherzustellen, dass CSP weniger Probleme verursacht und einfacher zu implementieren ist.

CSP kann auch verwendet werden, um eine granulare Kontrolle über Folgendes bereitzustellen:

- Das Laden von anderen Ressourcen wie Bildern, Videos und Audiodateien ({{Glossary("Fetch_directive", "Fetch-Direktiven")}} steuern das Laden von Ressourcen).
- [Web Workers](/de/docs/Web/API/Web_Workers_API) (über {{Glossary("Document_directive", "Dokumentdirektiven")}}).
- Eingebettete Inhalte (z.B. {{htmlelement("iframe")}}).
- Ziele für Navigation/Forms-Übermittlung (über {{Glossary("Navigation_directive", "Navigationsdirektiven")}}).

### Schritte zur Implementierung von CSP

> [!NOTE]
> Bevor Sie tatsächlich eine CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zunächst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) testen. Dies ermöglicht es Ihnen zu sehen, ob mit dieser Richtlinie Verstöße aufgetreten wären. Für diesen Test ist die Verwendung von `report-to` (oder das veraltete `report-uri`) erforderlich, wie unten erläutert.

1. Beginnen Sie mit dem Ausprobieren einer Richtlinie von `default-src https:`. Dies ist ein großartiges erstes Ziel, da es Inline-Code deaktiviert und Browser zwingt, HTTPS beim Laden von Ressourcen zu verwenden. Es ermöglicht Ihnen auch, die Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können. [`default-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) dient als Fallback für die anderen CSP-Fetch-Direktiven.
2. Starten Sie dann damit, die Richtlinie spezifischer zu gestalten, um die benötigten Elemente zuzulassen und unerwünschte Elemente zu blockieren. Sie könnten zunächst den Politikrahmen mit einer angemessen gesicherten Richtlinie wie `default-src 'none'; form-action 'self'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self';` erweitern.
3. Anschließend können Sie spezifische Quellen hinzufügen, die während der Tests hervorgehoben wurden; zum Beispiel `style-src 'self' https://example.com/`.
4. API-Endpunkte sollten eine Richtlinie verwenden, die das Laden und Einbetten von Ressourcen deaktiviert. Zum Beispiel `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'`.
5. Für bestehende Websites mit großen Codebasen, für die es zu viel Aufwand wäre, Inline-Skripte zu deaktivieren, können einige der CSP-Funktionen verwendet werden, die die Einführung auf älteren Sites erleichtern sollen. Zum Beispiel erfordert die [`nonce-*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-)-Direktive, dass ein `<script>` denselben Nonce in seinem [`nonce`](/de/docs/Web/HTML/Element/script#nonce)-Attribut angibt, damit das Laden erfolgreich ist, während die [`script-dynamic`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#strict-dynamic)-Direktive das Vertrauen aufgrund eines begleitenden Nonce auf andere Skripte, die das Top-Level-Skript lädt, erweitert.

Beachten Sie die folgenden Punkte:

- Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv) Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint.
- Bei `data:` URIs ist Vorsicht geboten, da diese innerhalb von `script-src` und `object-src` (oder `default-src`) unsicher sind.
- Ebenso kann die Verwendung von `script-src 'self'` unsicher für Sites mit JSONP-Endpunkten sein. Diese Sites sollten ein `script-src` verwenden, das den Pfad zu ihrem JavaScript-Quellenordner enthält.
- Sites sollten die {{Glossary("Reporting_directive", "Reporting-Direktiven")}} [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Methods/POST)en (angegeben im {{httpheader("Reporting-Endpoints")}} Header im Fall von `report-to`). Dies ermöglicht es, CSP-Verletzungen schnell zu erkennen und zu beheben.

  > [!NOTE] > `report-to` wird gegenüber dem veralteten `report-uri` bevorzugt; jedoch werden beide noch benötigt, da `report-to` noch keine vollständige Cross-Browser-Unterstützung hat.

- Schließen Sie keine unsicheren Quellen in Ihre CSP ein. Beispiele beinhalten `unsafe-inline` oder `data:` URIs innerhalb von `script-src` und allzu breite Quellen oder Formübermittlungsziele.
- Wenn Sites nicht die Fähigkeit benötigen, Plugins auszuführen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
- Wenn Sie SVG-Sprites, die in externen Dateien definiert sind, über das [`<use>`](/de/docs/Web/SVG/Element/use) Element einbetten, zum Beispiel:

  ```svg
  <svg>
    <use href="/images/icons.svg#icon"/>
  </svg>
  ```

  Ihre SVG-Bilder werden in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher wird `img-src 'self'` deren Laden nicht erlauben. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Fehler 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für mehr Informationen).

  Alternativ, wenn die `default-src 'none'`-Richtlinie ein festes Erfordernis ist, können Sie die SVG-Sprites inline in die HTML-Seite einfügen — siehe [CSP: default-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#firefox_default-src_none_svg_sprite_blocking_issue) für ein Beispiel.

## Beispiele

Deaktivieren Sie unsichere Inline/Eval und erlauben Sie nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS:

```http
Content-Security-Policy: default-src https:
```

Dasselbe tun, jedoch mit einem `<meta>`-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Deaktivieren Sie die Verwendung von unsicheren Inline/Eval und erlauben Sie alles andere außer der Ausführung von Plugins:

```http
Content-Security-Policy: default-src *; object-src 'none'
```

Deaktivieren Sie unsichere Inline/Eval-Skripte und Plugins, laden Sie nur Skripte und Stylesheets aus derselben Herkunft, erlauben Sie Schriften von `https://fonts.gstatic.com` und erlauben Sie Bildauflagen aus derselben Herkunft und `https://i.imgur.com`. Seiten sollten nach derartigen Richtlinien streben:

```http-nolint
Content-Security-Policy: default-src 'none'; font-src https://fonts.gstatic.com;
  img-src 'self' https://i.imgur.com; object-src 'none'; script-src 'self';
  style-src 'self'
```

Erlauben Sie es älteren Sites, Skripte sicher zu laden, mit einem erhöhten Vertrauensniveau durch einen Nonce:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-2726c7f26c'
```

Implementieren Sie die Richtlinie noch nicht; melden Sie nur die Verstöße, die aufgetreten wären:

```http-nolint
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"

Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-violation-report-endpoint/;
  report-to csp-endpoint;
```

Deaktivieren Sie das Laden und Einbetten von Ressourcen. APIs sollten eine Richtlinie wie diese verwenden:

```http
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
```

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
