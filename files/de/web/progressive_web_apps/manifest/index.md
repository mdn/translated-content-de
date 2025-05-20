---
title: Webanwendungsmanifest
short-title: Web app manifest
slug: Web/Progressive_web_apps/Manifest
l10n:
  sourceCommit: 204025469739413f67f22c6c1ede6ed904b7eac5
---

Ein **Webanwendungsmanifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/) Spezifikation, ist eine {{Glossary("JSON", "JSON")}}-Textdatei, die Informationen über eine Webanwendung bereitstellt.

Der häufigste Anwendungsfall für ein Webanwendungsmanifest ist die Bereitstellung von Informationen, die der Browser benötigt, um eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät zu installieren, wie z.B. den Namen und das Symbol der App.

Ein Webanwendungsmanifest enthält ein einzelnes JSON-Objekt, bei dem die obersten Schlüssel als _Mitglieder_ bezeichnet werden.

## Mitglieder

Dieser Abschnitt listet [Referenzseiten für Manifestmitglieder](/de/docs/Web/Progressive_web_apps/Manifest/Reference) auf, die auf MDN dokumentiert sind.
Alle Mitglieder sind in der Spezifikation optional, aber einige Anwendungen erfordern, dass bestimmte Mitglieder vorhanden sind. Zum Beispiel [müssen PWAs bestimmte Manifestmitglieder bereitstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

{{ListSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

> [!NOTE]
> Die Mitglieder `dir`, `lang` und `iarc_rating_id` sind nicht implementiert.

## Beispielmanifest

```json
{
  "short_name": "MDN",
  "name": "MDN Web Docs",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## Bereitstellung eines Manifests

Web-App-Manifestdateien werden in Ihren HTML-Seiten mit einem {{HTMLElement("link")}}-Element im {{HTMLElement("head")}} eines Dokuments eingebettet:

```html
<link rel="manifest" href="manifest.json" />
```

Die `.webmanifest`-Erweiterung wird im Abschnitt [Medientyp-Registrierung](https://w3c.github.io/manifest/#media-type-registration) der Spezifikation angegeben (die Antwort der Manifestdatei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen im Allgemeinen auch Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Wenn das Manifest Anmeldeinformationen zum Abrufen benötigt, muss das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut auf `use-credentials` gesetzt werden, selbst wenn die Manifestdatei im gleichen Ursprung wie die aktuelle Seite liegt.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Startbildschirme

In einigen Browsern und Betriebssystemen wird ein Startbildschirm angezeigt, wenn eine installierte PWA gestartet wird. Dieser Startbildschirm wird automatisch generiert und sein Aussehen wird durch Mitglieder im Web-App-Manifest definiert, insbesondere:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)
