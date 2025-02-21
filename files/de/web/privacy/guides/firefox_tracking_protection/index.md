---
title: Firefox-Verfolgungsschutz
slug: Web/Privacy/Guides/Firefox_tracking_protection
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

## Was ist der Verfolgungsschutz?

Firefox Desktop und Firefox für Android enthalten einen integrierten Verfolgungsschutz. In privaten Fenstern (Tabs bei Firefox für Android) blockiert Firefox Inhalte, die von Domains geladen werden, die Benutzer über Websites hinweg verfolgen (d. h. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)).

Wenn blockierte Inhalte Teil des Seitenlayouts sind, können Benutzer Layoutprobleme bemerken, wo Firefox diese Ladevorgänge blockiert hat. Manchmal bemerken Benutzer dies überhaupt nicht, wenn das Seitengitter so funktioniert, dass andere Seitenelemente in Löcher gleiten, die von blockierten Elementen hinterlassen wurden.

Wenn Firefox Inhalte blockiert, protokolliert es eine Nachricht in der Web-Konsole wie diese:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Beachten Sie, dass Sie mit Firefox für Android Konsolenausgaben über den Remote-Debugger zugreifen können.

![Seiteninformationen, die mögliche blockierte Inhalte anzeigen.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen über die aktuell geladene Seite anzuzeigen. Das erscheinende Popup benachrichtigt Sie, wenn Inhalte blockiert wurden. Sie können auch den Verfolgungsschutz vollständig deaktivieren, indem Sie auf die Verfolgungseinstellungen zugreifen.

Wenn Verfolgungs-Cookies vorhanden waren, könnten Sie die Liste anzeigen, indem Sie auf "Blocking Tracking Cookies" im obigen Bild klicken, um das folgende Popup anzuzeigen:

![Seiteninformationen, die Cookies und Website-Daten anzeigen.](tracking_cookies.png)

Sie können auf "Manage Content Blocking" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Ebenen der Inhaltsblockierung: standard, strikt oder benutzerdefiniert, die immer eingeschaltet oder nur, wenn Firefox zur Blockierung bekannter Verfolger eingestellt ist, konfiguriert werden können.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert werden soll?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Websites ausgeliefert, die als Nutzer über Websites hinweg verfolgend identifiziert wurden. Wenn der Verfolgungsschutz aktiviert ist, blockiert Firefox Inhalte von Websites in dieser Liste.

Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyse-Websites.

## Was bedeutet das für Ihre Website?

In erster Linie bedeutet es, dass, wenn der Verfolgungsschutz aktiviert ist:

- Inhalte, die von Drittanbieter-Trackern bereitgestellt werden, für Benutzer nicht sichtbar sein werden.
- Ihre Website keine Drittanbieter-Werbe- oder Analysedienste nutzen kann, die eine Verfolgung betreiben.

Feiner ausgedrückt, wenn andere Teile Ihrer Website davon abhängen, dass Tracker geladen werden, dann werden auch diese Teile nicht funktionieren, wenn der Verfolgungsschutz aktiviert ist. Zum Beispiel, wenn Ihre Website ein Callback beinhaltet, das ausgeführt wird, wenn Inhalte von einer Verfolgungsseite geladen werden, wird dieses Callback nicht ausgeführt.

Zum Beispiel sollten Sie Google Analytics nicht wie folgt verwenden:

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

Stattdessen sollten Sie den Fall berücksichtigen, in dem Google Analytics fehlt, indem Sie überprüfen, ob das Objekt `ga` initialisiert wurde:

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
> Abhängig von einem Dritten auf diese Weise ist ohnehin keine gute Praxis, da Ihre Website dann fehlerhaft sein kann, wenn die dritte Partei langsam oder nicht verfügbar ist oder wenn der Tracker durch ein Add-on blockiert wurde.
