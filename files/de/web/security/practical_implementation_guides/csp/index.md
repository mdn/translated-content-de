---
title: Implementierung von Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP-Header bietet eine detaillierte Kontrolle darüber, von welchen Standorten Ressourcen auf einer Website geladen werden können.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}})-Angriffe. Diese entstehen in der Regel durch mangelnde Kontrolle und Bewusstsein über die Quellen, von denen Seitenressourcen geladen werden. Dieses Problem wird schwieriger zu handhaben, je größer und komplexer Websites werden und je mehr sie sich auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken verlassen.

CSP kann auch dabei helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch das Stoppen der Einbettung Ihrer Website in {{htmlelement("iframe")}}-Elemente. Dies geschieht durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM)-Angriffen durch das Hochstufen aller HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) unterstützt. Weitere Details finden Sie in der [HSTS-Implementierung](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation).

## Lösung

Die Implementierung einer robusten CSP ist der beste Weg, um XSS-Schwachstellen zu verhindern.

Der Hauptvorteil von CSP besteht darin, die Verwendung von unsicherem Inline-JavaScript zu deaktivieren. Inline-JavaScript, ob reflektiert oder gespeichert, ermöglicht es, dass unsachgemäß kodierte Benutzereingaben Code erzeugen, der vom Webbrowser als JavaScript interpretiert wird. Durch die Verwendung von CSP zum Deaktivieren von Inline-JavaScript können Sie fast alle XSS-Angriffe gegen Ihre Website eliminieren.

Das Deaktivieren von Inline-JavaScript bedeutet, dass _alle_ JavaScript von externen Dateien über {{htmlelement("script")}}-Elemente mit `src`-Attributen geladen werden müssen. Inline-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Attributes#event_handler_attributes), wie `onclick`, und JavaScript, das direkt in `<script>`-Tags eingefügt wird, funktionieren nicht. Außerdem kann CSP auch interne Stylesheets (innerhalb von {{htmlelement("style")}}-Tags) und Inline-Stile (unter Verwendung des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs) deaktivieren.

Daher sollten Websites sorgfältig gestaltet werden, um sicherzustellen, dass CSP weniger Probleme verursacht und einfacher zu implementieren ist.

CSP kann auch verwendet werden, um eine feingranulare Kontrolle über folgende Dinge zu bieten:

- Das Laden anderer Ressourcen wie Bilder, Videos und Audios ([Fetch-Direktiven](/de/docs/Glossary/Fetch_directive) steuern das Laden von Ressourcen).
- [Web Workers](/de/docs/Web/API/Web_Workers_API) (über [Dokumenten-Direktiven](/de/docs/Glossary/Document_directive)).
- Eingebettete (d.h. {{htmlelement("iframe")}}) Inhalte.
- Navigationsziele und Formulareinreichungen (über [Navigationsdirektiven](/de/docs/Glossary/Navigation_directive)).

### Schritte zur Implementierung von CSP

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen. Diese Vorgehensweise ermöglicht es Ihnen zu sehen, ob Verstöße gegen diese Richtlinie aufgetreten wären. Dieser Test erfordert die Verwendung von `report-to` (oder dem veralteten `report-uri`), wie unten erklärt.

1. Beginnen Sie mit dem Ausprobieren einer Richtlinie von `default-src https:`. Dies ist ein großartiges erstes Ziel, da es Inline-Code deaktiviert und Browser zwingt, HTTPS beim Laden von Ressourcen zu verwenden. Dadurch können Sie auch beginnen, die Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können. [`default-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) dient als Fallback für die anderen CSP-Fetch-Direktiven.
2. Machen Sie die Richtlinie im nächsten Schritt spezifischer, um die von Ihnen benötigten Punkte zuzulassen, während sie unerwünschte Elemente blockieren. Sie könnten zuerst den Anwendungsbereich der Richtlinie mit einer vernünftig abgesicherten Richtlinie erweitern, wie etwa `default-src 'none'; form-action 'self'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self';`.
3. Fügen Sie dann die während des Testens hervorgehobenen spezifischen Quellen hinzu; zum Beispiel `style-src 'self' https://example.com/`.
4. API-Endpunkte sollten eine Richtlinie verwenden, die das Laden von Ressourcen und das Einbetten deaktiviert; zum Beispiel `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'`.
5. Für bestehende Websites mit großem Codebestand, bei denen das Deaktivieren von Inline-Skripten zu viel Arbeit wäre, können Sie einige CSP-Funktionen verwenden, die für die Erleichterung der Übernahme auf Legacy-Seiten entwickelt wurden. Zum Beispiel erfordert die Direktive [`nonce-*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-), dass ein `<script>` dasselbe Nonce in seinem [`nonce`](/de/docs/Web/HTML/Element/script#nonce)-Attribut spezifiziert, damit es geladen werden kann, während die Direktive [`script-dynamic`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#strict-dynamic) das Vertrauen, das einem begleitenden Nonce entgegengebracht wird, auf andere Skripte, die das Top-Level-Skript lädt, ausdehnt.

Beachten Sie die folgenden Punkte:

- Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können stattdessen Seiten ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv)-Element enthalten. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokumenten-{{htmlelement("head")}} erscheint.
- Vorsicht ist geboten bei `data:`-URIs, da diese innerhalb von `script-src` und `object-src` (oder `default-src`) unsicher sind.
- Ebenso kann die Verwendung von `script-src 'self'` unsicher sein für Websites mit JSONP-Endpunkten. Diese Websites sollten ein `script-src` verwenden, das den Pfad zu ihrem JavaScript-Quellordner enthält.
- Websites sollten die [Reporting-Direktiven](/de/docs/Glossary/Reporting_directive) [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) verwenden.
  Diese veranlassen den Browser dazu, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Methods/POST) (im {{httpheader("Reporting-Endpoints")}}-Header im Falle von `report-to`) zu senden. Dies erlaubt es, CSP-Verstöße schnell zu erkennen und zu beheben.

  > [!NOTE] > `report-to` wird dem veralteten `report-uri` vorgezogen; jedoch werden beide noch benötigt, da `report-to` noch nicht vollständig browserübergreifend unterstützt wird.

- Schließen Sie keine unsicheren Quellen in Ihre CSP ein. Beispiele dafür sind `unsafe-inline` oder `data:`-URIs innerhalb von `script-src` und zu breite Quellen oder Ziele für Formulareinreichungen.
- Sofern Websites nicht die Möglichkeit benötigen, Plugins auszuführen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
- Wenn Sie SVG-Sprites, die in externen Dateien definiert sind, über das [`<use>`](/de/docs/Web/SVG/Element/use)-Element einbetten, zum Beispiel:

  ```svg
  <svg>
    <use href="/images/icons.svg#icon"/>
  </svg>
  ```

  Werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher wird `img-src 'self'` nicht zulassen, dass sie geladen werden. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Bug 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für weitere Informationen).

  Alternativ, wenn die `default-src 'none'`-Richtlinie eine zwingende Anforderung ist, können Sie die SVG-Sprites inline auf der HTML-Seite einfügen — siehe [CSP: default-src](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#firefox_default-src_none_svg_sprite_blocking_issue) für ein Beispiel.

## Beispiele

Deaktivieren Sie unsichere Inline-/eval-Skripte und erlauben Sie nur das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) über HTTPS:

```http
Content-Security-Policy: default-src https:
```

Tun Sie dasselbe, aber mit einem `<meta>`-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Deaktivieren Sie die Verwendung von unsicherem Inline-/eval-Skripten und erlauben Sie alles andere außer der Ausführung von Plugins:

```http
Content-Security-Policy: default-src *; object-src 'none'
```

Deaktivieren Sie unsichere Inline-/eval-Skripte und laden Sie nur Ressourcen vom selben Ursprung mit Ausnahme von Bildern, die von `https://i.imgur.com` geladen werden können. Dies deaktiviert auch die Ausführung von Plugins:

```http-nolint
Content-Security-Policy: default-src 'self'; img-src 'self' https://i.imgur.com;
  object-src 'none'
```

Deaktivieren Sie unsichere Inline-/eval-Skripte und Plugins, laden Sie nur Skripte und Stylesheets vom selben Ursprung, erlauben Sie das Laden von Schriften von `https://fonts.gstatic.com` und das Laden von Bildern vom selben Ursprung und `https://i.imgur.com`. Websites sollten auf solche Richtlinien abzielen:

```http-nolint
Content-Security-Policy: default-src 'none'; font-src https://fonts.gstatic.com;
  img-src 'self' https://i.imgur.com; object-src 'none'; script-src 'self';
  style-src 'self'
```

Erlauben Sie es veralteten Websites, Skripte sicher zu laden, mit einem erhöhten Vertrauensniveau, das durch einen Nonce bereitgestellt wird:

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

Deaktivieren Sie das Laden von Ressourcen und Einbettung. APIs sollten eine derartige Richtlinie verwenden:

```http
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
```

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
