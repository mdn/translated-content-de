---
title: Firefox Tracking-Schutz
slug: Web/Privacy/Firefox_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

## Was ist Tracking-Schutz?

Firefox Desktop und Firefox für Android beinhalten einen integrierten Tracking-Schutz. In privaten Browsing-Fenstern (Tabs in Firefox für Android) blockiert Firefox Inhalte von Domains, die Benutzer über Websites hinweg verfolgen (d.h. via [Third-party Cookies](/de/docs/Web/Privacy/Third-party_cookies)).

Wenn blockierte Inhalte Teil des Seitenlayouts sind, können Benutzer Layoutprobleme bemerken, wo Firefox diese Ladevorgänge blockiert hat. Manchmal merken Benutzer überhaupt nichts, wenn das Seitenraster so funktioniert, dass andere Seiten-Elemente die durch blockierte Elemente entstandenen Lücken füllen.

Wenn Firefox Inhalte blockiert, wird im Webkonsolenprotokoll eine Nachricht wie diese angezeigt:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Beachten Sie, dass Sie mit Firefox für Android die Konsolenausgabe über den Remote-Debugger aufrufen können.

![Seiteninformationen, die mögliche blockierte Inhalte anzeigen.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen über die derzeit geladene Seite anzuzeigen. Das erscheinende Popup wird Sie benachrichtigen, wenn Inhalte blockiert wurden. Sie können den Tracking-Schutz auch vollständig deaktivieren, wenn Sie möchten, indem Sie auf die Tracking-Einstellungen zugreifen.

Wenn Tracking-Cookies vorhanden waren, können Sie die Liste anzeigen, indem Sie im obigen Bild auf "Tracking-Cookies blockieren" klicken, um das folgende Popup anzuzeigen:

![Seiteninformationen, die Cookies und Site-Daten anzeigen.](tracking_cookies.png)

Sie können auf "Verwaltung von Inhaltsblockierung" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Stufen der Inhaltsblockierung: Standard, streng oder benutzerdefiniert, die immer aktiviert sein können oder nur, wenn Firefox zum Blockieren bekannter Tracker eingestellt ist.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert wird?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Seiten ausgeliefert, die als Nutzer-Tracking über verschiedene Seiten hinweg identifiziert wurden. Wenn der Tracking-Schutz aktiviert ist, blockiert Firefox Inhalte von Seiten auf der Liste.

Seiten, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyseseiten.

## Was bedeutet das für Ihre Website?

In erster Linie bedeutet es, dass bei aktiviertem Tracking-Schutz:

- Inhalte von Drittanbieter-Trackern werden für Benutzer nicht sichtbar sein.
- Ihre Seite kann keine Drittanbieter-Werbung oder -Analysedienste verwenden, die Tracking betreiben.

Subtiler ausgedrückt, wenn andere Teile Ihrer Seite davon abhängen, dass Tracker geladen werden, dann werden diese Teile ebenfalls nicht funktionieren, wenn der Tracking-Schutz aktiviert ist. Wenn Ihre Seite beispielsweise einen Rückruf enthält, der ausgeführt wird, wenn Inhalte von einer Tracking-Seite geladen werden, dann wird der Rückruf nicht ausgeführt.

Verwenden Sie Google Analytics nicht auf folgende Weise:

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

Weitere Informationen zu dieser Technik finden Sie unter [Google Analytics, Privacy, and Event Tracking](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/).

> [!NOTE]
> Sich in dieser Weise auf einen Drittanbieter zu verlassen, ist ohnehin keine gute Praxis, da Ihre Seite dann kaputtgehen kann, wenn der Drittanbieter langsam oder nicht verfügbar ist oder wenn der Tracker durch ein Add-on blockiert wurde.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
