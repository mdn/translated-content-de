---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Strict-Transport-Security`** {{Glossary("response_header", "Antwort-Header")}} (oftmals abgekürzt als {{Glossary("HSTS", "HSTS")}}) informiert Browser, dass die Website nur über HTTPS aufgerufen werden soll und dass alle zukünftigen Versuche, sie über HTTP zu erreichen, automatisch zu HTTPS hochgestuft werden sollen.

> [!NOTE]
> Dies ist sicherer als die Einrichtung einer Umleitung von HTTP zu HTTPS ({{HTTPStatus("301")}}) auf Ihrem Server, da die anfängliche HTTP-Verbindung nach wie vor anfällig für einen Man-in-the-Middle-Angriff ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass eine Website nur über HTTPS aufgerufen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben ist, gilt diese Regel auch für alle Subdomains der Website.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Beim Verwenden von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.
    Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP annimmt und auf HTTPS umleitet, können Besucher anfänglich mit der unverschlüsselten Version der Website kommunizieren, bevor sie umgeleitet werden, z. B. wenn der Besucher `http://www.foo.com/` oder sogar nur `foo.com` eingibt.
Dies schafft eine Gelegenheit für einen Man-in-the-Middle-Angriff.
Die Umleitung könnte ausgenutzt werden, um Besucher anstelle der sicheren Version der ursprünglichen Website zu einer bösartigen Seite zu führen.

Der `Strict-Transport-Security`-Header informiert den Browser, dass er eine Website niemals über HTTP laden soll und alle Versuche, die Website über HTTP zu erreichen, stattdessen automatisch in HTTPS-Anfragen umwandeln soll.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird _ignoriert_ vom Browser, wenn Ihre Website nur über HTTP aufgerufen wurde.
> Sobald Ihre Website über HTTPS ohne Zertifikatsfehler aufgerufen wurde, weiß der Browser, dass Ihre Website HTTPS-fähig ist und wird den `Strict-Transport-Security`-Header respektieren.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Website abfangen und den Header injizieren oder entfernen könnten.

### Beispielszenario für Strict Transport Security

Angenommen, Sie haben sich in einem kostenlosen WLAN-Zugangspunkt an einem Flughafen eingeloggt und surfen im Internet, besuchen Ihren Online-Banking-Dienst, um Ihr Guthaben zu überprüfen und ein paar Rechnungen zu bezahlen.
Unglücklicherweise ist der Zugangspunkt, den Sie verwenden, tatsächlich der Laptop eines Hackers, und dieser fängt Ihre ursprüngliche HTTP-Anfrage ab und leitet Sie zu einem Klon der Webseite Ihrer Bank anstelle zur echten Webseite um. Nun sind Ihre privaten Daten dem Hacker ausgesetzt.

Strict Transport Security löst dieses Problem; solange Sie die Webseite Ihrer Bank einmal über HTTPS aufgerufen haben und die Webseite der Bank Strict Transport Security verwendet, wird Ihr Browser wissen, dass er nur HTTPS verwenden soll, was verhindert, dass Hacker diese Art von Man-in-the-Middle-Angriff ausführen können.

### Wie der Browser Strict Transport Security handhabt

Wenn eine Website zum ersten Mal über HTTPS aufgerufen wird und den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Information, sodass zukünftige Versuche, die Website über HTTP zu laden, automatisch stattdessen HTTPS verwenden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit abläuft, wird der nächste Versuch, die Website über HTTP zu laden, normal verlaufen, anstatt automatisch HTTPS zu verwenden.

Immer wenn der `Strict-Transport-Security`-Header an den Browser geliefert wird, wird er die Ablaufzeit für diese Website aktualisieren, sodass Websites diese Informationen auffrischen und verhindern können, dass das Timeout abläuft.
Sollte es notwendig sein, Strict Transport Security zu deaktivieren, setzt das Setzen von `max-age` auf `0` (über eine HTTPS-Verbindung) den `Strict-Transport-Security`-Header sofort außer Kraft, was den Zugriff über HTTP ermöglicht.

### Preloading Strict Transport Security

Google betreibt [einen HSTS Preload-Service](https://hstspreload.org/).
Durch die Befolgung der Richtlinien und die erfolgreiche Einreichung Ihrer Domain können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbunden werden.
Obwohl der Service von Google gehostet wird, nutzen alle Browser diese Preload-Liste.
Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell behandelt werden.

- Informationen zur HSTS-Preloadliste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox HSTS-Preloadliste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr über HTTPS erreichbar sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird auf https://hstspreload.org ein Wert von zwei Jahren empfohlen.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` ergänzt, was notwendig ist, um in die HSTS-Preload-Listen aller wichtigen Webbrowser wie Chromium, Edge und Firefox aufgenommen zu werden.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist jetzt verfügbar!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (erzwingt HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://de.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload-Service](https://hstspreload.org/)
