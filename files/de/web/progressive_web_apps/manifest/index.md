---
title: Web-App-Manifeste
short-title: Manifest
slug: Web/Progressive_web_apps/Manifest
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Ein **Web-App-Manifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/)-Spezifikation, ist eine {{Glossary("JSON", "JSON")}}-Textdatei, die Informationen über eine Webanwendung bereitstellt.

Die häufigste Verwendung eines Web-App-Manifests besteht darin, dem Browser Informationen bereitzustellen, die er benötigt, um eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät zu installieren, wie z. B. den Namen und das Symbol der App.

Ein Web-App-Manifest enthält ein einzelnes JSON-Objekt, bei dem die obersten Schlüssel als _Mitglieder_ bezeichnet werden.

## Mitglieder

Dieser Abschnitt listet die Mitglieder auf, die im Manifest erscheinen können.

Alle Mitglieder sind in der Spezifikation optional, aber einige Anwendungen erfordern, dass bestimmte Mitglieder vorhanden sind. Beispielsweise [müssen PWAs bestimmte Manifest-Mitglieder bereitstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

{{ListSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

> [!NOTE]
> Die `dir`, `lang` und `iarc_rating_id` Mitglieder sind nicht implementiert.

## Beispiel für ein Manifest

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

Web-App-Manifeste werden in Ihren HTML-Seiten mit einem {{HTMLElement("link")}}-Element im {{HTMLElement("head")}} eines Dokuments bereitgestellt:

```html
<link rel="manifest" href="manifest.json" />
```

Die `.webmanifest`-Erweiterung ist im Abschnitt [Medientyp-Registrierung](https://w3c.github.io/manifest/#media-type-registration) der Spezifikation angegeben (die Antwort der Manifest-Datei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen in der Regel auch Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Falls das Manifest Anmeldeinformationen erfordert, um es abzurufen, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `use-credentials` gesetzt werden, selbst wenn die Manifest-Datei im gleichen Ursprung wie die aktuelle Seite ist.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Startbildschirme

In einigen Browsern und Betriebssystemen wird beim Starten einer installierten PWA ein Startbildschirm angezeigt. Dieser Startbildschirm wird automatisch generiert und sein Erscheinungsbild wird durch Mitglieder im Web-App-Manifest definiert, speziell:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)
