---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der HTTP **`Strict-Transport-Security`** Response-Header (oft als [HSTS](/de/docs/Glossary/HSTS) abgekürzt) informiert Browser, dass die Seite nur über HTTPS erreichbar sein sollte, und dass jeder zukünftige Versuch, darauf über HTTP zuzugreifen, automatisch in HTTPS umgewandelt werden sollte.

> [!NOTE]
> Dies ist sicherer als einfach nur eine HTTP zu HTTPS (301) Weiterleitung auf Ihrem Server zu konfigurieren, bei der die anfängliche HTTP-Verbindung trotzdem anfällig für einen Man-in-the-Middle-Angriff ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Die Dauer in Sekunden, die der Browser sich merken soll, dass eine Seite nur über HTTPS zugänglich sein soll.
- `includeSubDomains` {{optional_inline}}
  - : Wenn dieser optionale Parameter angegeben ist, gilt diese Regel auch für alle Subdomains der Seite.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Vorladen von Strict Transport Security](#vorladen_von_strict_transport_security) für Details. Bei der Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.
    Gehört nicht zur Spezifikation.

## Beschreibung

Wenn eine Website eine Verbindung über HTTP akzeptiert und zu HTTPS weiterleitet, können Besucher zunächst mit der nicht verschlüsselten Version der Seite kommunizieren, bevor sie weitergeleitet werden, wenn beispielsweise der Besucher `http://www.foo.com/` oder einfach nur foo.com eingibt.
Dies bietet eine Gelegenheit für einen Man-in-the-Middle-Angriff.
Die Weiterleitung könnte ausgenutzt werden, um Besucher zu einer bösartigen Seite anstelle der sicheren Version der ursprünglichen Seite zu leiten.

Der HTTP Strict Transport Security-Header informiert den Browser, dass er nie eine Seite über HTTP laden soll und alle Versuche, auf die Seite über HTTP zuzugreifen, automatisch in HTTPS-Anfragen umgewandelt werden sollen.

> [!NOTE]
> Der `Strict-Transport-Security`-Header wird vom Browser _ignoriert_, wenn Ihre Seite nur über HTTP aufgerufen wurde.
> Sobald Ihre Seite über HTTPS aufgerufen wird, ohne dass es zu Zertifikatsfehlern kommt, weiß der Browser, dass Ihre Seite HTTPS-fähig ist, und wird den `Strict-Transport-Security`-Header beachten.
> Browser tun dies, da Angreifer HTTP-Verbindungen zur Seite abfangen und den Header einfügen oder entfernen könnten.

### Ein Beispiel-Szenario

Sie loggen sich an einem kostenfreien WLAN-Zugangspunkt auf einem Flughafen ein und starten das Surfen im Web, indem Sie Ihren Online-Banking-Dienst besuchen, um Ihr Guthaben zu überprüfen und einige Rechnungen zu bezahlen.
Leider ist der Zugangspunkt, den Sie nutzen, tatsächlich der Laptop eines Hackers, der Ihre ursprüngliche HTTP-Anfrage abfängt und Sie zu einer Kopie der Seite Ihrer Bank anstelle des Originals umleitet. Jetzt sind Ihre privaten Daten dem Hacker ausgesetzt.

Strict Transport Security löst dieses Problem; solange Sie die Website Ihrer Bank einmal über HTTPS aufgerufen haben und die Website der Bank Strict Transport Security verwendet, weiß Ihr
Browser, dass er nur HTTPS verwenden soll, was verhindert, dass Hacker diese Art von Man-in-the-Middle-Angriff ausführen.

### Wie der Browser es handhabt

Das erste Mal, wenn Ihre Seite über HTTPS aufgerufen wird und den `Strict-Transport-Security`-Header zurückgibt, speichert der Browser diese Information, sodass zukünftige Versuche, die Seite über HTTP zu laden, automatisch stattdessen HTTPS verwenden.

Wenn die im `Strict-Transport-Security`-Header angegebene Ablaufzeit abgelaufen ist, wird der nächste Versuch, die Seite über HTTP zu laden, normal verlaufen, anstatt automatisch HTTPS zu verwenden.

Jedes Mal, wenn der Strict-Transport-Security-Header an den Browser geliefert wird, wird die Ablaufzeit für diese Seite aktualisiert, sodass Seiten diese Informationen aktualisieren und das Ablaufdatum verhindern können.
Sollte es notwendig sein, Strict Transport Security zu deaktivieren, kann das Setzen von `max-age` auf 0 (über eine HTTPS-Verbindung) den `Strict-Transport-Security`-Header sofort ablaufen lassen und den Zugriff über HTTP erlauben.

## Vorladen von Strict Transport Security

Google betreibt einen [HSTS-Preload-Service](https://hstspreload.org/).
Durch Befolgen der Richtlinien und erfolgreiche Einreichung Ihrer Domain können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbunden werden.
Obwohl der Dienst von Google betrieben wird, verwenden alle Browser diese Preload-Liste.
Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: <https://www.chromium.org/hsts/>
- Konsultation der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird ein Wert von zwei Jahren wie auf <https://hstspreload.org> erläutert empfohlen.

Im folgenden Beispiel ist `max-age` auf 2 Jahre eingestellt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller großen Webbrowser, wie Chromium, Edge und Firefox, erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Blogbeitrag: [HTTP Strict Transport Security hat Einzug gehalten!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blogbeitrag: [HTTP Strict Transport Security (erzwingt HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Artikel: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [HSTS Preload-Service](https://hstspreload.org/)
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
