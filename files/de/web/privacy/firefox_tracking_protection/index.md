---
title: Firefox-Tracking-Schutz
slug: Web/Privacy/Firefox_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

## Was ist Tracking-Schutz?

Firefox Desktop und Firefox für Android beinhalten einen eingebauten Tracking-Schutz. In privaten Fenstern (bzw. Tabs in Firefox für Android) blockiert Firefox Inhalte, die von Domains geladen werden, die Nutzer über Websites hinweg verfolgen (d.h. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)).

Wenn blockierte Inhalte ein Teil des Seitenlayouts sind, können Benutzer Layoutprobleme bemerken, wo Firefox diese Ladevorgänge blockiert hat. Manchmal bemerkt der Benutzer dies überhaupt nicht, wenn das Seitenraster so funktioniert, dass andere Seitenelemente in die durch blockierte Elemente hinterlassenen Lücken rutschen.

Wenn Firefox Inhalte blockiert, wird eine Nachricht in der Web-Konsole protokolliert wie diese:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Beachten Sie, dass Sie bei Firefox für Android die Konsolenausgabe mit dem Remote-Debugger zugreifen können.

![Seiteninformationen, die möglicherweise blockierte Inhalte zeigen.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen zur aktuell geladenen Seite anzuzeigen. Das erscheinende Popup benachrichtigt Sie, wenn Inhalte blockiert wurden. Sie können auch den Tracking-Schutz vollständig deaktivieren, indem Sie auf die Tracking-Einstellungen zugreifen.

Wenn Tracking-Cookies vorhanden waren, können Sie die Liste anzeigen, indem Sie in obigem Bild auf "Tracking-Cookies blockieren" klicken, um das folgende Popup zu betrachten:

![Seiteninformationen, die Cookies und Site-Daten zeigen.](tracking_cookies.png)

Sie können auf "Inhaltsblockierung verwalten" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Stufen der Inhaltsblockierung: Standard, streng oder benutzerdefiniert, die immer eingeschaltet sein können oder nur, wenn Firefox eingestellt ist, bekannte Tracker zu blockieren.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert wird?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Sites geliefert, die als Nutzer-Tracking über Websites hinweg identifiziert wurden. Wenn der Tracking-Schutz aktiviert ist, blockiert Firefox Inhalte von Sites auf der Liste.

Websites, die Nutzer verfolgen, sind am häufigsten Drittanbieter-Werbe- und Analyse-Sites.

## Was bedeutet das für Ihre Website?

In erster Linie bedeutet es, dass bei aktiviertem Tracking-Schutz:

- Inhalte, die von Drittanbieter-Trackern bereitgestellt werden, für Benutzer nicht sichtbar sind.
- Ihre Site kann keine Drittanbieter-Werbe- oder Analysedienste verwenden, die Tracking betreiben.

Noch subtiler, wenn andere Teile Ihrer Site davon abhängen, dass Tracker geladen werden, dann werden diese Teile ebenfalls nicht funktionieren, wenn der Tracking-Schutz aktiviert ist. Zum Beispiel, wenn Ihre Site einen Rückruf enthält, der ausgeführt wird, wenn Inhalte von einem Tracking-Site geladen werden, dann wird dieser Rückruf nicht ausgeführt.

Beispielsweise sollten Sie Google Analytics nicht auf folgende Weise verwenden:

```html example-bad
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  Visit example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    ga("send", "event", "outbound", "click", url, {
      transport: "beacon",
      hitCallback() {
        document.location = url;
      },
    });
  }
</script>
```

Stattdessen sollten Sie den Fall berücksichtigen, wenn Google Analytics fehlt, indem Sie überprüfen, ob das `ga`-Objekt initialisiert wurde:

```html example-good
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  Visit example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    if (window.ga && ga.loaded) {
      ga("send", "event", "outbound", "click", url, {
        transport: "beacon",
        hitCallback() {
          document.location = url;
        },
      });
    } else {
      document.location = url;
    }
  }
</script>
```

Weitere Informationen zu dieser Technik finden Sie unter [Google Analytics, Datenschutz und Ereignisverfolgung](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/).

> [!NOTE]
> In Abhängigkeit von einer Drittanbieter in dieser Weise ist ohnehin keine gute Praxis, denn dann kann Ihre Seite unterbrochen werden, wenn die Drittanbieter langsam oder nicht verfügbar sind oder wenn der Tracker durch ein Add-on blockiert wurde.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
