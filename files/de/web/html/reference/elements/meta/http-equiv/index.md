---
title: "`<meta http-equiv>` HTML-Attribut"
short-title: <meta http-equiv>
slug: Web/HTML/Reference/Elements/meta/http-equiv
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`http-equiv`** Attribut des {{htmlelement("meta")}} Elements ermöglicht es Ihnen, Verarbeitungsanweisungen für den Browser bereitzustellen, als ob die Antwort, die das Dokument zurückgegeben hat, bestimmte HTTP-Header enthalten würde.
Die Metadaten sind _dokumentenebene Metadaten_, die für die gesamte Seite gelten.

Wenn ein `<meta>` Element ein `http-equiv` Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content) Attribut den entsprechenden `http-equiv` Wert.
Zum Beispiel weist das folgende `<meta>` Tag den Browser an, die Seite nach 5 Minuten zu aktualisieren:

```html
<meta http-equiv="Refresh" content="300" />
```

## Wert

Nur ein Teil der HTTP-Header werden als `http-equiv` Werte unterstützt.
Diese beinhalten:

- `content-language` {{deprecated_inline}}
  - : Setzt eine Standardsprache für das Dokument, die von unterstützenden Technologien oder vom Browser zum Styling verwendet wird.
    Ähnlich dem {{httpheader("Content-Language")}} HTTP-Header.
    Verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut.
- `content-type`
  - : Gibt den [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichencodierung des Dokuments an.
    Das `content` Attribut muss `"text/html; charset=utf-8"` sein, wenn es angegeben ist.
    Dies entspricht einem `<meta>` Element mit dem [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset) Attribut und unterliegt derselben Einschränkung hinsichtlich der Platzierung innerhalb des Dokuments.
    Kann nur in Dokumenten verwendet werden, die mit einem `text/html` Medientyp geliefert werden — nicht in Dokumenten, die mit einem XML (`application/xml` oder `application/xhtml+xml`) Typ geliefert werden.
    Siehe den {{httpheader("Content-Type")}} HTTP-Header.
- `content-security-policy`
  - : Ermöglicht es Seitenautoren, eine Inhalts-Sicherheitsrichtlinie (CSP) für die aktuelle Seite zu definieren, typischerweise um zulässige Ursprünge und Skriptendpunkte anzugeben, um gegen Cross-Site-Scripting-Angriffe zu schützen.
    Siehe den {{httpheader("Content-Security-Policy")}} HTTP-Header.
- `default-style`
  - : Setzt den Namen des standardmäßigen [CSS Stylesheet](/de/docs/Web/CSS) Satzes.
- `refresh`
  - : Entspricht dem {{httpheader("Refresh")}} HTTP-Header.
    Diese Anweisung spezifiziert:
    - Die Anzahl der Sekunden, bis die Seite neu geladen werden sollte, wenn das `content` Attribut eine nicht-negative ganze Zahl ist.
    - Die Anzahl der Sekunden, bis die Seite zu einer anderen URL umleiten sollte, wenn das `content` Attribut eine nicht-negative ganze Zahl gefolgt von `;url=` und einer gültigen URL ist.

    Der Timer startet, wenn die Seite _vollständig geladen_ ist, also nachdem die [`load`](/de/docs/Web/API/Window/load_event) und [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignisse ausgelöst wurden.
    Siehe [Zugänglichkeitsbedenken](#zugänglichkeitsbedenken) für weitere Informationen.

- `set-cookie` {{deprecated_inline}}
  - : Setzt ein Cookie für das Dokument.
    Browser ignorieren jetzt dieses Pragma; verwenden Sie den {{httpheader("Set-Cookie")}} HTTP-Antwort-Header oder [`document.cookie`](/de/docs/Web/API/Document/cookie) stattdessen.
- `x-ua-compatible` {{deprecated_inline}}
  - : Wurde von älteren Versionen des inzwischen eingestellten {{Glossary("Microsoft_Internet_Explorer", "Microsoft Internet Explorer")}} verwendet, damit es spezifiziertes Verhalten besser einhielt.
    Wenn angegeben, muss das `content` Attribut den Wert `"IE=edge"` haben.
    Benutzeragenten ignorieren jetzt dieses Pragma.
    Der Name leitet sich vom `X-UA-Compatible` HTTP-Header ab.

> [!WARNING]
> Einige Browser verarbeiten zusätzliche Header, die oben nicht aufgeführt sind.
> Da nicht erkannte Header oder ungültige Werte ignoriert werden, kann dies zu inkonsistentem Verhalten bei der Browserimplementierung führen.
> Insbesondere **setzen Sie andere Sicherheitsheader nicht** mit `<meta http-equiv=`, da dies zu einem falschen Sicherheitsgefühl führen kann!

## Zugänglichkeitsbedenken

Seiten, die mit einem `http-equiv="Refresh"` Wert gesetzt sind, laufen Gefahr, dass das Aktualisierungsintervall zu kurz ist.
Personen, die mit unterstützenden Technologien wie einem Screenreader navigieren, können möglicherweise nicht den gesamten Inhalt der Seite lesen und verstehen, bevor sie automatisch weitergeleitet werden.
Plötzliche, unangekündigte Seitenaktualisierungen können auch für Menschen verwirrend sein, die unter eingeschränkten Sehfähigkeiten leiden.

- [MDN Verständnis WCAG, Erklärung zu Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
- [MDN Verständnis WCAG, Erklärung zu Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [Verständnis des Erfolgskriteriums 2.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
- [Verständnis des Erfolgskriteriums 2.2.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
- [Verständnis des Erfolgskriteriums 3.2.5 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen zulassen

Dieses HTML `<meta>` Element setzt die standardmäßige CSP so, dass das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS erlaubt ist.
Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Dieselben Einschränkungen können unter Verwendung des HTTP {{httpheader("Content-Security-Policy")}} Headers angewendet werden:

```http
Content-Security-Policy: default-src https:
```

### Eine Seitenweiterleitung einrichten

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser zu einer Umleitung zu veranlassen.
Das `content="3;url=https://www.mozilla.org"` Attribut leitet die Seite nach `https://www.mozilla.org` nach 3 Sekunden weiter:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<meta name="referrer">`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
- [Metadaten: das `<meta>` Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Verhinderung von Angriffen mit `<meta>`](https://almanac.httparchive.org/en/2022/security#preventing-attacks-using-meta) httparchive.org (2022)
