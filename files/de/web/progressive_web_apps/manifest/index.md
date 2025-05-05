---
title: Web-Application-Manifest
short-title: Web app manifest
slug: Web/Progressive_web_apps/Manifest
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Ein **Web-Application-Manifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/) Spezifikation, ist eine {{Glossary("JSON", "JSON")}} Textdatei, die Informationen über eine Webanwendung bereitstellt.

Die häufigste Verwendung eines Web-Application-Manifests ist die Bereitstellung von Informationen, die der Browser benötigt, um eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät zu installieren, wie z.B. den Namen und das Symbol der App.

Ein Web-Application-Manifest enthält ein einzelnes JSON-Objekt, bei dem die Schlüssel der obersten Ebene _Mitglieder_ genannt werden.

## Mitglieder

Dieser Abschnitt listet die Mitglieder auf, die im Manifest erscheinen können.

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

## Bereitstellen eines Manifests

Web-App-Manifeste werden in Ihren HTML-Seiten unter Verwendung eines {{HTMLElement("link")}}-Elements im {{HTMLElement("head")}} eines Dokuments bereitgestellt:

```html
<link rel="manifest" href="manifest.json" />
```

Die Erweiterung `.webmanifest` wird im Abschnitt [Medientyp-Registrierung](https://w3c.github.io/manifest/#media-type-registration) der Spezifikation spezifiziert (die Antwort der Manifestdatei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen im Allgemeinen Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Wenn für das Manifest zum Abrufen Anmeldeinformationen erforderlich sind, muss das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut auf `use-credentials` gesetzt werden, selbst wenn die Manifestdatei im gleichen Ursprung wie die aktuelle Seite ist.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Begrüßungsbildschirm

In einigen Browsern und Betriebssystemen wird ein Begrüßungsbildschirm angezeigt, wenn eine installierte PWA gestartet wird. Dieser Bildschirm wird automatisch generiert und sein Erscheinungsbild wird durch Mitglieder im Web-App-Manifest definiert, insbesondere durch:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)
