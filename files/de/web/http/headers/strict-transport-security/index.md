---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der HTTP-**`Strict-Transport-Security`**-Antwortheader (oft abgekürzt als [HSTS](/de/docs/Glossary/HSTS)) informiert Browser darüber, dass die Webseite ausschließlich über HTTPS erreichbar sein soll und dass alle zukünftigen Versuche, sie über HTTP zu erreichen, automatisch in HTTPS umgewandelt werden sollen.

> [!NOTE]
> Dies ist sicherer als das einfache Konfigurieren einer HTTP-zu-HTTPS-Umleitung (301) auf Ihrem Server, bei der die anfängliche HTTP-Verbindung immer noch anfällig für einen Man-in-the-Middle-Angriff ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass eine Seite nur über HTTPS erreichbar ist.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben ist, gilt diese Regel auch für alle Subdomains der Webseite.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen und die `includeSubDomains`-Direktive muss vorhanden sein.
    Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Webseite eine Verbindung über HTTP akzeptiert und zu HTTPS umleitet, können Besucher zunächst mit der unverschlüsselten Version der Seite kommunizieren, bevor sie umgeleitet werden, wenn z. B. der Besucher `http://www.foo.com/` oder einfach nur foo.com eingibt.
Dies schafft eine Gelegenheit für einen Man-in-the-Middle-Angriff.
Die Umleitung könnte ausgenutzt werden, um Besucher auf eine bösartige Seite statt auf die sichere Version der ursprünglichen Seite zu leiten.

Der HTTP Strict Transport Security Header informiert den Browser, dass er niemals eine Seite über HTTP laden und alle Versuche, die Seite über HTTP zu erreichen, stattdessen automatisch in HTTPS-Anfragen umwandeln soll.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird vom Browser _ignoriert_, wenn Ihre Seite nur über HTTP aufgerufen wurde.
> Sobald Ihre Seite über HTTPS ohne Zertifikatfehler aufgerufen wird, weiß der Browser, dass Ihre Seite HTTPS-fähig ist und beachtet den `Strict-Transport-Security`-Header.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Seite abfangen und den Header injizieren oder entfernen können.

### Ein Beispiel-Szenario

Sie loggen sich in einen kostenlosen WLAN-Zugangspunkt an einem Flughafen ein und beginnen im Internet zu surfen, indem Sie Ihren Online-Banking-Service besuchen, um Ihr Guthaben zu überprüfen und ein paar Rechnungen zu bezahlen.
Leider ist der Zugangspunkt, den Sie nutzen, tatsächlich der Laptop eines Hackers, und dieser fängt Ihre ursprüngliche HTTP-Anfrage ab und leitet Sie zu einer Kopie der Bankseite um, anstatt zur echten Seite. Nun sind Ihre privaten Daten für den Hacker offen.

Strict Transport Security löst dieses Problem; solange Sie die Webseite Ihrer Bank einmal mit HTTPS aufgerufen haben und die Bankseite Strict Transport Security verwendet, wird Ihr Browser wissen, dass er automatisch nur HTTPS verwenden soll, was verhindert, dass Hacker diese Art von Man-in-the-Middle-Angriff durchführen können.

### Wie der Browser damit umgeht

Beim ersten Zugriff auf Ihre Seite über HTTPS und der Rückgabe des `Strict-Transport-Security`-Headers speichert der Browser diese Information, sodass zukünftige Versuche, die Seite über HTTP zu laden, automatisch HTTPS verwendet werden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit abgelaufen ist, wird der nächste Versuch, die Seite über HTTP zu laden, wie gewohnt fortgesetzt, anstatt automatisch HTTPS zu verwenden.

Wann immer der Strict-Transport-Security-Header an den Browser geliefert wird, aktualisiert er die Ablaufzeit für diese Seite, sodass Seiten diese Informationen aktualisieren können und das Timeout nicht abläuft.
Sollte es notwendig sein, Strict Transport Security zu deaktivieren, wird durch das Setzen von `max-age` auf 0 (über eine HTTPS-Verbindung) der `Strict-Transport-Security`-Header sofort ablaufen, sodass der Zugang über HTTP möglich ist.

## Preloading Strict Transport Security

Google betreibt einen [HSTS-Preload-Service](https://hstspreload.org/).
Indem Sie den Richtlinien folgen und erfolgreich Ihre Domain einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbinden.
Obwohl der Service von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell behandelt werden.

- Informationen zur HSTS-Preload-Liste in Chrome: <https://www.chromium.org/hsts/>
- Konsultation der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr per HTTPS erreichbar sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird ein Wert von zwei Jahren empfohlen, wie auf <https://hstspreload.org> erklärt.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller wichtigen Webbrowser wie Chromium, Edge und Firefox erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Blogbeitrag: [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blogbeitrag: [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Artikel: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [HSTS Preload Service](https://hstspreload.org/)
- [Merkmale, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
