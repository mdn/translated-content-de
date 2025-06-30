---
title: <meta> http-equiv Attribut
short-title: <meta> http-equiv
slug: Web/HTML/Reference/Elements/meta/http-equiv
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{HTMLSidebar}}

Das **`http-equiv`** Attribut des {{htmlelement("meta")}} Elements ermöglicht es Ihnen, dem Browser Verarbeitungsanweisungen zu geben, als ob die Antwort, die das Dokument zurückgegeben hat, bestimmte HTTP-Header enthalten würde. Die Metadaten sind _dokumentbezogene Metadaten_, die für die gesamte Seite gelten.

Wenn ein `<meta>` Element ein `http-equiv` Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content) Attribut den entsprechenden `http-equiv` Wert. Zum Beispiel weist das folgende `<meta>` Tag den Browser an, die Seite nach 5 Minuten zu aktualisieren:

```html
<meta http-equiv="Refresh" content="300" />
```

## Wert

Nur eine Teilmenge der HTTP-Header wird als `http-equiv` Werte unterstützt. Diese beinhalten:

- `content-language` {{deprecated_inline}}
  - : Legt eine Standardsprache für das Dokument fest, die von unterstützenden Technologien oder Styling durch den Browser verwendet wird. Ähnlich dem {{httpheader("Content-Language")}} HTTP-Header. Verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut.
- `content-type`
  - : Deklariert den [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichencodierung des Dokuments. Das `content` Attribut muss `"text/html; charset=utf-8"` sein, wenn es angegeben wird. Dies entspricht einem `<meta>` Element mit dem [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset) Attribut und hat die gleiche Einschränkung hinsichtlich der Platzierung im Dokument. Kann nur in Dokumenten verwendet werden, die mit einem `text/html` Medientyp bereitgestellt werden – nicht in Dokumenten, die mit einem XML (`application/xml` oder `application/xhtml+xml`) Typ bereitgestellt werden. Siehe den {{httpheader("Content-Type")}} HTTP-Header.
- `content-security-policy`
  - : Ermöglicht es Seitenautoren, eine Content Security Policy (CSP) für die aktuelle Seite zu definieren, typischerweise um erlaubte Ursprünge und Skript-Endpunkte zu spezifizieren und sich so gegen Cross-Site-Scripting-Angriffe zu schützen. Siehe den {{httpheader("Content-Security-Policy")}} HTTP-Header.
- `default-style`
  - : Legt den Namen des Standard-[CSS-Stilsheets](/de/docs/Web/CSS) fest.
- `refresh`
  - : Entspricht dem {{httpheader("Refresh")}} HTTP-Header. Diese Anweisung spezifiziert:
    - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll, wenn das `content` Attribut eine nicht-negative Ganzzahl ist.
    - Die Anzahl der Sekunden, bis die Seite zu einer anderen URL weiterleiten soll, wenn das `content` Attribut eine nicht-negative Ganzzahl gefolgt von `;url=` und einer gültigen URL ist.

    Der Timer beginnt, wenn die Seite _vollständig geladen_ ist, also nachdem sowohl das [`load`](/de/docs/Web/API/Window/load_event) als auch das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis ausgelöst wurde. Siehe [Barrierefreiheitshinweise](#barrierefreiheitshinweise) für weitere Informationen.

- `set-cookie` {{deprecated_inline}}
  - : Setzt ein Cookie für das Dokument. Browser ignorieren dieses Pragma jetzt; verwenden Sie den {{httpheader("Set-Cookie")}} HTTP-Antwort-Header oder [`document.cookie`](/de/docs/Web/API/Document/cookie) stattdessen.
- `x-ua-compatible` {{deprecated_inline}}
  - : Wurde von älteren Versionen des inzwischen eingestellten {{Glossary("Microsoft_Internet_Explorer", "Microsoft Internet Explorer")}} verwendet, sodass er das spezifizierte Verhalten enger einhielt. Wenn angegeben, muss das `content` Attribut den Wert `"IE=edge"` haben. Benutzeragenten ignorieren dieses Pragma jetzt. Der Name leitet sich vom `X-UA-Compatible` HTTP-Header ab.

> [!WARNING]
> Einige Browser verarbeiten zusätzliche Header, die oben nicht aufgelistet sind. Da nicht erkannte Header oder ungültige Werte ignoriert werden, kann dies zu inkonsistentem Verhalten zwischen Browserimplementierungen führen. Insbesondere **setzen Sie keine anderen Sicherheits-Header** mit `<meta http-equiv=`, da dies zu einem falschen Sicherheitsgefühl führen kann!

## Barrierefreiheitshinweise

Seiten, die mit einem `http-equiv="Refresh"` Wert gesetzt sind, laufen Gefahr, dass das Aktualisierungsintervall zu kurz ist. Menschen, die mit Hilfe von unterstützenden Technologien wie einem Screenreader navigieren, können möglicherweise den Inhalt der Seite nicht vollständig lesen und verstehen, bevor sie automatisch weitergeleitet werden. Abrupte, unangekündigte Seitenaktualisierungen können auch für Menschen mit Sehbehinderungen verwirrend sein.

- [MDN Verstehen von WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
- [MDN Verstehen von WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [Verstehen von Erfolgskriterium 2.2.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
- [Verstehen von Erfolgskriterium 2.2.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
- [Verstehen von Erfolgskriterium 3.2.5 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieses HTML `<meta>` Element setzt die Standard-CSP so, dass das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS erfolgt. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Die gleichen Einschränkungen können mit dem HTTP {{httpheader("Content-Security-Policy")}} Header angewendet werden:

```http
Content-Security-Policy: default-src https:
```

### Eine Seitenumleitung einstellen

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser anzuleiten, eine Umleitung durchzuführen. Das `content="3;url=https://www.mozilla.org"` Attribut wird die Seite nach 3 Sekunden auf `https://www.mozilla.org` umleiten:

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
- [Angriffe mit `<meta>` verhindern](https://almanac.httparchive.org/en/2022/security#preventing-attacks-using-meta) httparchive.org (2022)
