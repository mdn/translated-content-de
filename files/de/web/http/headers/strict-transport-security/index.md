---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der HTTP-**`Strict-Transport-Security`**-Antwortheader (oft abgekürzt als {{Glossary("HSTS")}}) informiert Browser darüber, dass auf die Website nur über HTTPS zugegriffen werden soll und dass alle zukünftigen Versuche, über HTTP darauf zuzugreifen, automatisch in HTTPS umgewandelt werden sollen.

> [!NOTE]
> Dies ist sicherer als einfach nur eine HTTP-zu-HTTPS-Weiterleitung (301) auf Ihrem Server zu konfigurieren, bei der die anfängliche HTTP-Verbindung weiterhin anfällig für einen Man-in-the-Middle-Angriff ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## Direktiven

- `max-age=<expire-time>`
  - : Die Zeit in Sekunden, für die der Browser sich merken soll, dass eine Website nur mit HTTPS aufgerufen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben ist, gilt diese Regel auch für alle Subdomains der Website.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Vorladen von Strict Transport Security](#vorladen_von_strict_transport_security) für Details. Bei der Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) sein und die `includeSubDomains`-Direktive muss vorhanden sein.
    Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP akzeptiert und zu HTTPS umleitet, können Besucher zunächst mit der nicht verschlüsselten Version der Website kommunizieren, bevor sie weitergeleitet werden, beispielsweise wenn der Besucher `http://www.foo.com/` oder sogar nur foo.com eingibt.
Dies schafft eine Gelegenheit für einen Man-in-the-Middle-Angriff.
Die Weiterleitung könnte ausgenutzt werden, um Besucher auf eine bösartige Website anstelle der sicheren Version der Originalseite zu leiten.

Der HTTP Strict Transport Security-Header informiert den Browser, dass er niemals eine Site über HTTP laden soll und automatisch alle Versuche, auf die Site über HTTP zuzugreifen, in HTTPS-Anfragen umwandeln soll.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird vom Browser _ignoriert_, wenn Ihre Website nur über HTTP aufgerufen wurde.
> Sobald Ihre Website über HTTPS ohne Zertifikatsfehler aufgerufen wird, erkennt der Browser, dass Ihre Website HTTPS-fähig ist und beachtet den `Strict-Transport-Security`-Header.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Site abfangen und den Header injizieren oder entfernen könnten.

### Ein Beispiel-Szenario

Sie loggen sich in einen kostenfreien WLAN-Zugangspunkt an einem Flughafen ein und beginnen im Internet zu surfen, besuchen Ihren Online-Banking-Service, um Ihr Guthaben zu überprüfen und ein paar Rechnungen zu bezahlen.
Leider ist der Zugangspunkt, den Sie verwenden, in Wirklichkeit der Laptop eines Hackers, und dieser fängt Ihre ursprüngliche HTTP-Anfrage ab und leitet Sie zu einer Kopie der Website Ihrer Bank anstelle der echten Seite weiter. Jetzt sind Ihre privaten Daten dem Hacker ausgesetzt.

Strict Transport Security löst dieses Problem; solange Sie die Website Ihrer Bank einmal mit HTTPS aufgerufen haben und die Website Ihrer Bank Strict Transport Security verwendet, weiß Ihr
Browser, dass er automatisch nur HTTPS verwenden soll, was verhindert, dass Hacker diesen Man-in-the-Middle-Angriff ausführen.

### Wie der Browser damit umgeht

Das erste Mal, wenn Ihre Site über HTTPS aufgerufen wird und den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Informationen, sodass zukünftige Versuche, die Site über HTTP zu laden, automatisch stattdessen HTTPS verwenden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit endet, wird der nächste Versuch, die Site über HTTP zu laden, wie gewohnt fortgesetzt, anstatt automatisch HTTPS zu verwenden.

Immer wenn der Strict-Transport-Security-Header an den Browser übermittelt wird, aktualisiert er die Ablaufzeit für diese Site, sodass Websites diese Informationen aktualisieren und verhindern können, dass die Zeitbeschränkung abläuft.
Sollte es notwendig sein, Strict Transport Security zu deaktivieren, wird das Setzen von `max-age` auf 0 (über eine HTTPS-Verbindung) den `Strict-Transport-Security`-Header sofort ablaufen lassen und den Zugriff über HTTP erlauben.

## Vorladen von Strict Transport Security

Google betreibt einen [HSTS Preload Dienst](https://hstspreload.org/).
Indem Sie die Richtlinien befolgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbinden.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Sie ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: <https://www.chromium.org/hsts/>
- Konsultation der Firefox-HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, sind zwei Jahre der empfohlene Wert, wie auf <https://hstspreload.org> erklärt.

Im folgenden Beispiel ist `max-age` auf 2 Jahre gesetzt und wird mit `preload` ergänzt, was für die Aufnahme in die HSTS-Preload-Listen aller wichtigen Webbrowser notwendig ist, wie Chromium, Edge und Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Blogpost: [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blogpost: [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP-Artikel: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [HSTS Preload Dienst](https://hstspreload.org/)
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
