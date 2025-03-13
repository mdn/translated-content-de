---
title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Strict-Transport-Security`** (oft abgekürzt als {{Glossary("HSTS", "HSTS")}}) informiert Browser darüber, dass auf die Website nur über HTTPS zugegriffen werden sollte und dass alle zukünftigen Zugriffsversuche über HTTP automatisch auf HTTPS umgeleitet werden sollen.

> [!NOTE]
> Dies ist sicherer als die Konfiguration einer HTTP-zu-HTTPS-Weiterleitung ({{HTTPStatus("301")}}) auf Ihrem Server, da die anfängliche HTTP-Verbindung immer noch anfällig für einen Man-in-the-Middle-Angriff ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungsheader")}}</th>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass auf eine Seite nur über HTTPS zugegriffen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben wird, gilt diese Regel auch für alle Subdomains der Webseite.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen und die `includeSubDomains`-Direktive muss vorhanden sein.
    Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP akzeptiert und auf HTTPS umleitet, können Besucher zunächst mit der nicht verschlüsselten Version der Seite kommunizieren, bevor sie weitergeleitet werden, wenn sie beispielsweise `http://www.foo.com/` oder sogar nur `foo.com` eingeben.
Dies schafft die Möglichkeit eines Man-in-the-Middle-Angriffs.
Die Weiterleitung könnte ausgenutzt werden, um Besucher zu einer bösartigen Seite statt zur sicheren Version der ursprünglichen Seite zu leiten.

Der `Strict-Transport-Security`-Header informiert den Browser, dass eine Seite niemals über HTTP geladen werden sollte und konvertiert automatisch alle Versuche, die Seite über HTTP zuzugreifen, in HTTPS-Anfragen.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird vom Browser ignoriert, wenn Ihre Seite nur über HTTP aufgerufen wurde.
> Sobald Ihre Seite über HTTPS ohne Zertifikatsfehler aufgerufen wird, erkennt der Browser, dass Ihre Seite HTTPS-fähig ist, und respektiert den `Strict-Transport-Security`-Header.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Seite abfangen und den Header einfügen oder entfernen könnten.

### Beispielszenario für Strict Transport Security

Angenommen, Sie haben sich bei einem kostenlosen WLAN-Zugangspunkt an einem Flughafen angemeldet und surfen im Internet, besuchen Ihren Online-Banking-Dienst, um Ihren Kontostand zu prüfen und einige Rechnungen zu bezahlen.
Unglücklicherweise ist der Zugangspunkt, den Sie verwenden, tatsächlich ein Laptop eines Hackers, und sie fangen Ihre ursprüngliche HTTP-Anfrage ab und leiten Sie zu einer Clone-Seite Ihrer Bank statt zur echten weiter. Jetzt sind Ihre privaten Daten dem Hacker ausgesetzt.

Strict Transport Security löst dieses Problem; solange Sie die Website Ihrer Bank einmal über HTTPS aufgerufen haben und die Website der Bank Strict Transport Security verwendet, wird Ihr Browser automatisch nur HTTPS verwenden, was verhindert, dass Hacker diese Art von Man-in-the-Middle-Angriff durchführen.

### Wie der Browser Strict Transport Security handhabt

Das erste Mal, wenn eine Seite über HTTPS aufgerufen wird und sie den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Information, sodass zukünftige Versuche, die Seite über HTTP zu laden, automatisch stattdessen HTTPS verwenden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit verstreicht, wird der nächste Versuch, die Seite über HTTP zu laden, wie gewohnt fortfahren, anstatt automatisch HTTPS zu verwenden.

Wann immer der `Strict-Transport-Security`-Header an den Browser übermittelt wird, wird er die Ablaufzeit für diese Seite aktualisieren, sodass Seiten diese Informationen aktualisieren und das Ablaufen des Timeouts verhindern können.
Sollte es notwendig sein, Strict Transport Security zu deaktivieren, führt das Setzen von `max-age` auf `0` (über eine HTTPS-Verbindung) zum sofortigen Ablaufen des `Strict-Transport-Security`-Headers, wodurch der Zugriff über HTTP ermöglicht wird.

### Preloading Strict Transport Security

Google betreibt einen [HSTS-Preload-Dienst](https://hstspreload.org/).
Durch Befolgen der Richtlinien und erfolgreiches Einreichen Ihrer Domain können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbunden werden.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Allerdings ist er kein Teil der HSTS-Spezifikation und sollte nicht als offiziell angesehen werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Einsicht in die Firefox-HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle jetzigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird ein Zeitraum von zwei Jahren empfohlen, wie auf https://hstspreload.org erklärt wird.

Im folgenden Beispiel ist `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller großen Webbrowser wie Chromium, Edge und Firefox erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eigenschaften, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist da!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (erzwinge HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Spickzettel auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS-Preload-Dienst](https://hstspreload.org/)
