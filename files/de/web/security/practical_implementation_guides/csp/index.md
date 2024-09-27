---
title: Content Security Policy (CSP) Implementierung
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) bietet eine feinkörnige Kontrolle über die Orte, von denen Ressourcen auf einer Website geladen werden können.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) Angriffe. Diese treten in der Regel aufgrund fehlender Kontrolle und Bewusstsein über die Quellen auf, von denen Ressourcen einer Website geladen werden. Dieses Problem wird schwieriger zu handhaben, je größer und komplexer die Websites werden und verstärkt auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch Verhinderung, dass Ihre Website in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies erfolgt durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM) Angriffen durch Upgraden aller HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) unterstützt. Weitere Details finden Sie unter [HSTS-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation).

## Lösung

Die Implementierung einer robusten CSP ist der beste Weg, um XSS-Schwachstellen zu verhindern.

Der Hauptvorteil von CSP besteht darin, die Verwendung von unsicherem Inline-JavaScript zu deaktivieren. Inline-JavaScript, egal ob reflektiert oder gespeichert, ermöglicht schlecht bereinigten Benutzereingaben die Generierung von Code, der vom Webbrowser als JavaScript interpretiert wird. Durch die Verwendung von CSP zur Deaktivierung von Inline-JavaScript können Sie fast alle XSS-Angriffe gegen Ihre Website eliminieren.

Die Deaktivierung von Inline-JavaScript bedeutet, dass _alles_ JavaScript aus externen Dateien über {{htmlelement("script")}}-Elemente mit `src`-Attributen geladen werden muss. Inline [Event-Handler-Attribute](/de/docs/Web/HTML/Attributes#event_handler_attributes) wie `onclick` und JavaScript, das direkt in `<script>`-Tags eingefügt wurde, werden nicht funktionieren. Darüber hinaus kann CSP auch interne Stylesheets (in {{htmlelement("style")}}-Tags) und Inline-Stile (mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut) deaktivieren.

Daher sollten Websites sorgfältig gestaltet werden, um sicherzustellen, dass CSP weniger Probleme verursacht und einfacher zu implementieren ist.

CSP kann auch verwendet werden, um eine granulare Kontrolle über Folgendes bereitzustellen:

- Laden anderer Ressourcen wie Bilder, Videos und Audio ([Fetch-Direktiven](/de/docs/Glossary/Fetch_directive) steuern das Laden von Ressourcen).
- [Web Worker](/de/docs/Web/API/Web_Workers_API) (über [Dokument-Direktiven](/de/docs/Glossary/Document_directive)).
- Eingebettete (d.h. {{htmlelement("iframe")}}) Inhalte.
- Navigationsziele und Formulareinreichungsziele (über [Navigations-Direktiven](/de/docs/Glossary/Navigation_directive)).

### Schritte zur Implementierung von CSP

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, sie zuerst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) zu testen. Auf diese Weise können Sie sehen, ob Verstöße gegen diese Richtlinie auftreten würden. Dieser Test erfordert die Verwendung von `report-to` (oder dem veralteten `report-uri`), wie unten erläutert.

1. Beginnen Sie mit dem Ausprobieren einer Richtlinie von `default-src https:`. Dies ist ein guter erster Schritt, da es Inline-Code deaktiviert und Browser dazu zwingt, HTTPS zu verwenden, wenn Ressourcen geladen werden. Es wird Ihnen auch ermöglichen, die Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können. [`default-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) dient als Fallback für die anderen CSP-Fetch-Direktiven.
2. Beginnen Sie dann, die Richtlinie spezifischer zu machen, um die benötigten Elemente zuzulassen und unerwünschte zu blockieren. Sie könnten zuerst den Umfang der Richtlinie mit einer vernünftig gesperrten Richtlinie erweitern, wie z. B. `default-src 'none'; form-action 'self'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self';`.
3. Aktualisieren Sie die Richtlinie mit den spezifischen Quellen, die während des Tests hervorgehoben wurden; beispielsweise `style-src 'self' https://example.com/`.
4. API-Endpunkte sollten eine Richtlinie verwenden, die das Laden und Einbetten von Ressourcen deaktiviert; zum Beispiel `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'`.
5. Für bestehende Websites mit großen Codebasen, die zu viel Arbeit erfordern würden, um Inline-Skripte zu deaktivieren, können Sie einige CSP-Features verwenden, die entwickelt wurden, um die Annahme auf Legacy-Seiten zu erleichtern. Beispielsweise erfordert die [`nonce-*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-) Direktive, dass ein `<script>` das gleiche Nonce in seinem [`nonce`](/de/docs/Web/HTML/Element/script#nonce) Attribut angibt, damit das Laden erfolgreich ist, während die [`script-dynamic`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#strict-dynamic) Direktive das Vertrauen, das einem begleitenden Nonce entgegengebracht wird, auf andere Skripte erweitert, die das Hauptskript lädt.

Beachten Sie die folgenden Punkte:

- Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv)-Element einfügen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument{{htmlelement("head")}} erscheint.
- Vorsicht ist geboten bei `data:`-URIs, da diese im `script-src` und `object-src` (oder `default-src`) unsicher sind.
- Ebenso kann die Verwendung von `script-src 'self'` für Seiten mit JSONP-Endpunkten unsicher sein. Diese Seiten sollten einen `script-src` verwenden, der den Pfad zu ihrem JavaScript-Quellenordner(n) enthält.
- Websites sollten die [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) [Reporting-Direktiven](/de/docs/Glossary/Reporting_directive) verwenden.
  Diese verursachen, dass der Browser JSON-Berichte über CSP-Verstöße an Endpunkte sendet (angegeben im {{httpheader("Reporting-Endpoints")}}-Header im Falle von `report-to`). Dadurch können CSP-Verstöße schnell erkannt und behoben werden.

  > [!NOTE] > `report-to` wird gegenüber dem veralteten `report-uri` bevorzugt; beide werden jedoch weiterhin benötigt, da `report-to` noch keine vollständige Unterstützung in allen Browsern hat.

- Schließen Sie keine unsicheren Quellen in Ihre CSP ein. Beispiele hierfür sind `unsafe-inline` oder `data:`-URIs innerhalb von `script-src` und zu breite Quellen oder Ziele für Formulareinreichungen.
- Wenn Websites nicht die Möglichkeit benötigen, Plugins auszuführen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
- Wenn Sie SVG-Sprites, die in externen Dateien definiert sind, über das [`<use>`](/de/docs/Web/SVG/Element/use)-Element einbetten, z.B.:

  ```svg
  <svg>
    <use href="/images/icons.svg#icon"/>
  </svg>
  ```

  werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher wird `img-src 'self'` diese nicht laden lassen. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Fehler 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für weitere Informationen).

  Alternativ, wenn die `default-src 'none'`-Richtlinie eine harte Anforderung ist, können Sie die SVG-Sprites inline auf der HTML-Seite einfügen — siehe [CSP: default-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#firefox_default-src_none_svg_sprite_blocking_issue) für ein Beispiel.

## Beispiele

Deaktivieren unsicherer Inline/Eval und erlauben nur das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) über HTTPS:

```http
Content-Security-Policy: default-src https:
```

Tun Sie dasselbe, aber mit einem `<meta>`-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Deaktivieren Sie die Verwendung von unsicherem Inline/Eval und erlauben alles andere außer der Ausführung von Plugins:

```http
Content-Security-Policy: default-src *; object-src 'none'
```

Deaktivieren Sie unsichere Inline/Eval und laden Sie Ressourcen nur aus demselben Ursprung, mit Ausnahme von Bildern, die von `https://i.imgur.com` geladen werden können. Dies deaktiviert auch die Ausführung von Plugins:

```http-nolint
Content-Security-Policy: default-src 'self'; img-src 'self' https://i.imgur.com;
  object-src 'none'
```

Deaktivieren Sie unsichere Inline/Eval-Skripte und Plugins, laden Sie Skripte und Stylesheets nur vom selben Ursprung, erlauben Sie das Laden von Schriften von `https://fonts.gstatic.com`, und erlauben Sie das Laden von Bildern vom selben Ursprung und `https://i.imgur.com`. Websites sollten Richtlinien wie diese anstreben:

```http-nolint
Content-Security-Policy: default-src 'none'; font-src https://fonts.gstatic.com;
  img-src 'self' https://i.imgur.com; object-src 'none'; script-src 'self';
  style-src 'self'
```

Erlauben Sie älteren Websites, Skripte sicher zu laden, indem sie ein erhöhtes Vertrauensniveau durch einen Nonce bieten:

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
