---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Strict-Transport-Security`**-{{Glossary("response_header", "Antwort-Header")}} (oft als {{Glossary("HSTS", "HSTS")}} abgekürzt) informiert Browser, dass die Website nur über HTTPS zugänglich sein soll, und dass alle zukünftigen Zugriffsversuche über HTTP automatisch zu HTTPS hochgestuft werden sollen.

> [!NOTE]
> Dies ist sicherer, als eine Umleitung von HTTP zu HTTPS ({{HTTPStatus("301")}}) auf Ihrem Server zu konfigurieren, da die anfängliche HTTP-Verbindung dennoch für einen Man-in-the-Middle-Angriff anfällig ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass eine Website nur über HTTPS erreichbar ist.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben ist, gilt diese Regel auch für alle Subdomains der Website.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Beim Verwenden von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein. Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP akzeptiert und zu HTTPS umleitet, können Besucher zunächst mit der nicht verschlüsselten Version der Website kommunizieren, bevor sie umgeleitet werden, z. B. wenn der Besucher `http://www.foo.com/` oder einfach nur `foo.com` eingibt.
Dies schafft eine Gelegenheit für einen Man-in-the-Middle-Angriff.
Die Umleitung könnte ausgenutzt werden, um Besucher auf eine bösartige Website anstelle der sicheren Version der ursprünglichen Website zu lenken.

Der `Strict-Transport-Security`-Header informiert den Browser darüber, dass er eine Website niemals über HTTP laden soll und stattdessen alle Versuche, die Website über HTTP zu erreichen, automatisch in HTTPS-Anfragen umwandeln soll.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird von dem Browser _ignoriert_, wenn Ihre Website nur über HTTP zugegriffen wurde.
> Sobald Ihre Website über HTTPS ohne Zertifikatfehler zugegriffen wurde, weiß der Browser, dass Ihre Website HTTPS-fähig ist, und wird den `Strict-Transport-Security`-Header beachten.
> Browser machen dies, da Angreifer möglicherweise HTTP-Verbindungen zur Website abfangen und den Header injizieren oder entfernen können.

### Beispielscenario für Strict Transport Security

Angenommen, Sie haben sich an einem Flughafen in einen kostenlosen WLAN-Zugangspunkt eingeloggt und beginnen im Internet zu surfen, indem Sie Ihren Online-Banking-Dienst besuchen, um Ihren Kontostand zu prüfen und ein paar Rechnungen zu bezahlen.
Leider ist der Zugangspunkt, den Sie verwenden, tatsächlich der Laptop eines Hackers, der Ihre ursprüngliche HTTP-Anfrage abfängt und Sie zu einer Kopie der Website Ihrer Bank umleitet anstatt zum Original. Jetzt sind Ihre privaten Daten für den Hacker exponiert.

Strict Transport Security löst dieses Problem; solange Sie einmal über HTTPS auf die Website Ihrer Bank zugegriffen haben und die Bankwebsite Strict Transport Security verwendet, weiß Ihr Browser automatisch, nur HTTPS zu verwenden, was verhindert, dass Hacker solche Man-in-the-Middle-Angriffe durchführen.

### Wie der Browser Strict Transport Security behandelt

Das erste Mal, dass eine Website über HTTPS zugegriffen wird und den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Information, sodass zukünftige Zugriffe auf die Website über HTTP automatisch stattdessen HTTPS verwenden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit abläuft, wird der nächste Versuch, die Website über HTTP zu laden, normal fortgesetzt, anstatt automatisch HTTPS zu verwenden.

Immer wenn der `Strict-Transport-Security`-Header an den Browser geliefert wird, aktualisiert er die Ablaufzeit für diese Website, sodass Websites diese Information auffrischen und verhindern können, dass der Timeout abläuft.
Sollte es notwendig sein, Strict Transport Security zu deaktivieren, wird durch das Setzen des `max-age` auf `0` (über eine HTTPS-Verbindung) der `Strict-Transport-Security`-Header sofort ablaufen, sodass der Zugriff über HTTP möglich ist.

### Preloading Strict Transport Security

Google unterhält einen [HSTS Preload-Dienst](https://hstspreload.org/).
Wenn Sie die Richtlinien befolgen und Ihre Domain erfolgreich übermitteln, können Sie sicherstellen, dass Browser nur über sichere Verbindungen zu Ihrer Domain verbinden.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Es ist jedoch kein Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS verwenden.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, werden zwei Jahre als empfohlener Wert angesehen, wie auf https://hstspreload.org erklärt wird.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` ergänzt, was für die Aufnahme in die HSTS-Preload-Listen aller wichtigen Webbrowser wie Chromium, Edge und Firefox erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist da!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (erzwinge HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheat-Sheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload-Service](https://hstspreload.org/)
