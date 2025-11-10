---
title: <meta> http-equiv-Attribut
short-title: <meta> http-equiv
slug: Web/HTML/Reference/Elements/meta/http-equiv
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`http-equiv`**-Attribut des {{htmlelement("meta")}}-Elements ermöglicht es Ihnen, dem Browser Verarbeitungsanweisungen zu geben, als ob die Antwort, die das Dokument zurückgab, bestimmte HTTP-Header einschloss. Die Metadaten sind _Dokument-Ebenen-Metadaten_, die für die gesamte Seite gelten.

Wenn ein `<meta>`-Element ein `http-equiv`-Attribut hat, definiert ein [`content`](/de/docs/Web/HTML/Reference/Attributes/content)-Attribut den entsprechenden `http-equiv`-Wert. Zum Beispiel weist das folgende `<meta>`-Tag den Browser an, die Seite nach 5 Minuten zu aktualisieren:

```html
<meta http-equiv="Refresh" content="300" />
```

## Wert

Nur eine Teilmenge der HTTP-Header wird als `http-equiv`-Werte unterstützt. Diese umfassen:

- `content-language` {{deprecated_inline}}
  - : Legt eine Standard-Sprache für das Dokument fest, die von unterstützenden Technologien oder beim Styling durch den Browser verwendet wird. Ähnlich dem {{httpheader("Content-Language")}} HTTP-Header. Verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut.
- `content-type`
  - : Deklariert den [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) und die Zeichenkodierung des Dokuments. Das `content`-Attribut muss `"text/html; charset=utf-8"` sein, wenn es spezifiziert ist. Dies entspricht einem `<meta>`-Element mit dem [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut und unterliegt denselben Einschränkungen hinsichtlich der Platzierung im Dokument. Kann nur in Dokumenten verwendet werden, die mit einem `text/html`-Medientyp bereitgestellt werden – nicht in Dokumenten, die mit einem XML- (`application/xml` oder `application/xhtml+xml`) Typ bereitgestellt werden. Siehe den {{httpheader("Content-Type")}} HTTP-Header.
- `content-security-policy`
  - : Ermöglicht es Seitenautoren, eine Content-Security-Policy (CSP) für die aktuelle Seite zu definieren, typischerweise um erlaubte Ursprünge und Skriptendpunkte festzulegen, um Cross-Site-Scripting-Angriffe zu verhindern. Siehe den {{httpheader("Content-Security-Policy")}} HTTP-Header.
- `default-style`
  - : Legt den Namen des Standard-[CSS-Stylesheets](/de/docs/Web/CSS) fest.
- `refresh`
  - : Entspricht dem {{httpheader("Refresh")}} HTTP-Header. Diese Anweisung gibt an:
    - Die Anzahl der Sekunden, bis die Seite neu geladen werden soll, wenn das `content`-Attribut eine nicht-negative ganze Zahl ist.
    - Die Anzahl der Sekunden, bis die Seite zu einer anderen URL weiterleiten soll, wenn das `content`-Attribut eine nicht-negative ganze Zahl gefolgt von `;url=` und einer gültigen URL ist.

    Der Timer beginnt, wenn die Seite _vollständig geladen_ ist, also nachdem sowohl die [`load`](/de/docs/Web/API/Window/load_event)- als auch die [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignisse abgefeuert wurden. Siehe [Barrierefreiheitsbedenken](#barrierefreiheitsbedenken) für weitere Informationen.

- `set-cookie` {{deprecated_inline}}
  - : Setzt ein Cookie für das Dokument. Browser ignorieren jetzt dieses Pragma; verwenden Sie den {{httpheader("Set-Cookie")}} HTTP-Antwort-Header oder [`document.cookie`](/de/docs/Web/API/Document/cookie) stattdessen.
- `x-ua-compatible` {{deprecated_inline}}
  - : Wurde von älteren Versionen des inzwischen eingestellten {{Glossary("Microsoft_Internet_Explorer", "Microsoft Internet Explorer")}} verwendet, damit es das spezifizierte Verhalten besser befolgte. Wenn angegeben, muss das `content`-Attribut den Wert `"IE=edge"` haben. Benutzeragenten ignorieren jetzt dieses Pragma. Der Name leitet sich vom `X-UA-Compatible` HTTP-Header ab.

> [!WARNING]
> Einige Browser verarbeiten zusätzlich Header, die oben nicht aufgeführt sind. Da nicht erkannte Header oder ungültige Werte ignoriert werden, kann dies zu inkonsistentem Verhalten bei Browserimplementierungen führen. Insbesondere: **Setzen Sie keine anderen Sicherheits-Header** mit `<meta http-equiv=` fest, da dies zu einem falschen Sicherheitsgefühl führen kann!

## Barrierefreiheitsbedenken

Seiten, die mit einem `http-equiv="Refresh"`-Wert eingestellt sind, laufen Gefahr, dass das Aktualisierungsintervall zu kurz ist. Menschen, die mit Hilfe von unterstützender Technologie wie einem Bildschirmlesegerät navigieren, können möglicherweise den Inhalt der Seite nicht durchlesen und verstehen, bevor sie automatisch umgeleitet werden. Abrupte, unangekündigte Seitenupdates können auch desorientierend für Menschen mit Sehbehinderungen sein.

- [MDN Understanding WCAG, Guideline 2.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
- [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
- [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

## Beispiele

### Unsicheren Inline-Code deaktivieren und nur HTTPS-Ressourcen erlauben

Dieses HTML-`<meta>`-Element setzt die Standard-CSP so, dass nur das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) über HTTPS erlaubt ist. Da die Direktiven `unsafe-inline` und `unsafe-eval` nicht gesetzt sind, werden Inline-Skripte blockiert:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Die gleichen Einschränkungen können mit dem HTTP-{{httpheader("Content-Security-Policy")}}-Header angewandt werden:

```http
Content-Security-Policy: default-src https:
```

### Eine Seitenumleitung einrichten

Das folgende Beispiel verwendet `http-equiv="refresh"`, um den Browser anzuweisen, eine Umleitung durchzuführen. Das `content="3;url=https://www.mozilla.org"`-Attribut wird die Seite nach 3 Sekunden auf `https://www.mozilla.org` umleiten:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<meta name="referrer">`](/de/docs/Web/HTML/Reference/Elements/meta/name/referrer)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [Verhinderung von Angriffen mit `<meta>`](https://almanac.httparchive.org/en/2022/security#preventing-attacks-using-meta) httparchive.org (2022)
