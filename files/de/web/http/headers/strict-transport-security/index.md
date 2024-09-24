---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der HTTP **`Strict-Transport-Security`** Antwort-Header (oft abgekürzt als {{Glossary("HSTS")}}) informiert Browser darüber, dass die Seite ausschließlich über HTTPS aufgerufen werden soll und dass alle zukünftigen Versuche, sie über HTTP zu erreichen, automatisch in HTTPS umgewandelt werden sollen.

> [!NOTE]
> Dies ist sicherer als einfach nur eine HTTP-zu-HTTPS (301) Weiterleitung auf Ihrem Server zu konfigurieren, bei der die anfängliche HTTP-Verbindung immer noch anfällig für einen Man-in-the-Middle-Angriff ist.

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
  - : Die Zeit in Sekunden, während der der Browser sich merken soll, dass die Seite nur über HTTPS aufgerufen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben ist, gilt diese Regel auch für alle Subdomains der Seite.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Beim Verwenden von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.
    Nicht Teil der Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP akzeptiert und zu HTTPS umleitet, können Besucher zunächst mit der nicht verschlüsselten Version der Seite kommunizieren, bevor sie umgeleitet werden, wenn beispielsweise der Besucher `http://www.foo.com/` oder sogar nur foo.com eingibt.
Dies schafft eine Möglichkeit für einen Man-in-the-Middle-Angriff.
Die Umleitung könnte ausgenutzt werden, um Besucher zu einer bösartigen Seite anstelle der sicheren Version der ursprünglichen Seite zu leiten.

Der HTTP Strict Transport Security-Header informiert den Browser, dass er eine Seite niemals über HTTP laden und alle Versuche, die Seite über HTTP zu erreichen, automatisch in HTTPS-Anfragen umwandeln soll.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird vom Browser _ignoriert_, wenn Ihre Seite nur über HTTP aufgerufen wurde.
> Sobald Ihre Seite über HTTPS ohne Zertifikatsfehler aufgerufen wird, weiß der Browser, dass Ihre Seite HTTPS-fähig ist, und wird den `Strict-Transport-Security`-Header berücksichtigen.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Seite abfangen und den Header einfügen oder entfernen könnten.

### Ein Beispiel-Szenario

Sie melden sich an einem kostenlosen WLAN-Zugangspunkt auf einem Flughafen an und beginnen, im Internet zu surfen, wobei Sie Ihre Online-Banking-Seite besuchen, um Ihren Kontostand zu überprüfen und ein paar Rechnungen zu bezahlen.
Unglücklicherweise ist der von Ihnen genutzte Zugangspunkt tatsächlich der Laptop eines Hackers, und dieser fängt Ihre ursprüngliche HTTP-Anfrage ab und leitet Sie zu einer Nachbildung der Seite Ihrer Bank anstelle der echten weiter. Jetzt sind Ihre privaten Daten dem Hacker ausgesetzt.

Strict Transport Security löst dieses Problem; solange Sie die Website Ihrer Bank einmal über HTTPS aufgerufen haben und die Website der Bank Strict Transport Security verwendet, weiß Ihr Browser, dass er nur HTTPS verwenden soll, was verhindert, dass Hacker diese Art von Man-in-the-Middle-Angriff ausführen können.

### Wie der Browser damit umgeht

Das erste Mal, wenn Ihre Seite über HTTPS aufgerufen wird und den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Information, sodass zukünftige Versuche, die Seite über HTTP zu laden, automatisch stattdessen HTTPS verwenden.

Wenn die durch den `Strict-Transport-Security`-Header angegebene Ablaufzeit verstreicht, wird der nächste Versuch, die Seite über HTTP zu laden, wie gewohnt verlaufen, anstatt automatisch HTTPS zu verwenden.

Wann immer der Strict-Transport-Security-Header an den Browser übermittelt wird, aktualisiert er die Ablaufzeit für diese Seite, sodass Websites diese Information aktualisieren und das Ablaufdatum verhindern können.
Falls es notwendig ist, Strict Transport Security zu deaktivieren, führt das Festlegen der `max-age` auf 0 (über eine HTTPS-Verbindung) dazu, dass der `Strict-Transport-Security`-Header sofort verfällt, was den Zugriff über HTTP ermöglicht.

## Preloading Strict Transport Security

Google pflegt [einen HSTS-Preload-Dienst](https://hstspreload.org/).
Indem Sie den Richtlinien folgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen auf Ihre Domain zugreifen.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Sie ist jedoch kein Teil der HSTS-Spezifikation und sollte nicht als offiziell behandelt werden.

- Informationen zur HSTS-Preload-Liste in Chrome: <https://www.chromium.org/hsts/>
- Abfrage der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

Alle aktuellen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS verwenden.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, sind zwei Jahre der empfohlene Wert, wie auf <https://hstspreload.org> erläutert.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller großen Web-Browser, wie Chromium, Edge und Firefox, notwendig ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Blog-Post: [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog-Post: [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP-Artikel: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [HSTS Preload-Dienst](https://hstspreload.org/)
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
