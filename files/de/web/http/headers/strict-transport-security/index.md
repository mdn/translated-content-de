---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Strict-Transport-Security`** {{Glossary("response_header", "response header")}} (oft abgekürzt als {{Glossary("HSTS", "HSTS")}}) informiert Browser darüber, dass die Seite nur über HTTPS zugänglich sein soll und dass zukünftige Versuche, auf sie über HTTP zuzugreifen, automatisch auf HTTPS hochgestuft werden sollen.

> [!NOTE]
> Dies ist sicherer als das Konfigurieren einer HTTP-zu-HTTPS-({{HTTPStatus("301")}})-Weiterleitung auf Ihrem Server, da die anfängliche HTTP-Verbindung immer noch für einen Man-in-the-Middle-Angriff anfällig ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass eine Seite nur über HTTPS aufgerufen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben wird, gilt diese Regel auch für alle Subdomains der Seite.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Bei der Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.
    Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP akzeptiert und zu HTTPS umleitet, können Besucher zunächst mit der nicht verschlüsselten Version der Seite kommunizieren, bevor sie umgeleitet werden, wenn sie beispielsweise `http://www.foo.com/` oder sogar nur `foo.com` eingeben.
Dies schafft eine Möglichkeit für einen Man-in-the-Middle-Angriff.
Die Umleitung könnte ausgenutzt werden, um Besucher auf eine bösartige Seite anstelle der sicheren Version der ursprünglichen Seite zu leiten.

Der `Strict-Transport-Security`-Header informiert den Browser, dass er niemals eine Seite über HTTP laden soll und automatisch alle Versuche, auf die Seite zuzugreifen, in HTTPS-Anfragen umwandeln soll.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird vom Browser _ignoriert_, wenn Ihre Seite nur über HTTP aufgerufen wurde.
> Sobald Ihre Seite über HTTPS ohne Zertifikatsfehler aufgerufen wird, weiß der Browser, dass Ihre Seite HTTPS-fähig ist und wird den `Strict-Transport-Security`-Header beachten.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Seite abfangen und den Header einfügen oder entfernen können.

### Beispiel-Szenario für Strict Transport Security

Angenommen, Sie haben sich in einen kostenlosen WLAN-Zugangspunkt an einem Flughafen eingeloggt und beginnen, im Internet zu surfen, wobei Sie Ihr Online-Banking-Dienst besuchen, um Ihren Kontostand zu überprüfen und ein paar Rechnungen zu bezahlen.
Leider ist der Zugangspunkt, den Sie verwenden, tatsächlich der Laptop eines Hackers, und er fängt Ihre ursprüngliche HTTP-Anfrage ab und leitet Sie zu einem Klon der Seite Ihrer Bank anstelle des echten Weiteren.
Nun sind Ihre privaten Daten für den Hacker zugänglich.

Strict Transport Security löst dieses Problem; solange Sie die Webseite Ihrer Bank einmal über HTTPS aufgerufen haben und die Webseite der Bank Strict Transport Security verwendet, weiß Ihr Browser, dass er automatisch nur HTTPS verwenden soll, was verhindert, dass Hacker diese Art von Man-in-the-Middle-Angriff durchführen.

### Wie der Browser Strict Transport Security behandelt

Das erste Mal, wenn eine Site über HTTPS aufgerufen wird und sie den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Information, sodass zukünftige Versuche, die Site über HTTP zu laden, automatisch HTTPS verwenden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit abläuft, wird der nächste Versuch, die Seite über HTTP zu laden, wie gewohnt fortgesetzt und nicht automatisch HTTPS verwenden.

Jedes Mal, wenn der `Strict-Transport-Security`-Header an den Browser geliefert wird, wird die Ablaufzeit für diese Seite aktualisiert, sodass Seiten diese Informationen aktualisieren und ein Ablaufdatum verhindern können.
Falls es erforderlich ist, Strict Transport Security zu deaktivieren, führt das Setzen von `max-age` auf `0` (über eine HTTPS-Verbindung) dazu, dass der `Strict-Transport-Security`-Header sofort abläuft und der Zugriff über HTTP ermöglicht wird.

### Preloading Strict Transport Security

Google betreibt einen [HSTS-Preload-Service](https://hstspreload.org/).
Indem Sie die Richtlinien befolgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbunden werden.
Obwohl der Service von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell behandelt werden.

- Informationen über die HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr über HTTPS bereitgestellt.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, sind zwei Jahre der empfohlene Wert, wie auf https://hstspreload.org erklärt.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller großen Webbrowser wie Chromium, Edge und Firefox erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen auf sichere Kontexte beschränkt](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security hat Einzug gehalten!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (erzwinge HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS-Preload-Service](https://hstspreload.org/)
