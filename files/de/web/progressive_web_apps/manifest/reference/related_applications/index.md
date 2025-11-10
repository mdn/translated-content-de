---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
l10n:
  sourceCommit: d007a8e309a42faa62a69e0cd1095578e61a2b86
---

{{SeeCompatTable}}

Das `related_applications` Manifestmitglied wird verwendet, um eine oder mehrere Anwendungen anzugeben, die mit Ihrer Webanwendung in Verbindung stehen. Dies können plattform-spezifische Anwendungen oder Progressive Web Apps sein.

Dies ermöglicht Ihnen die Nutzung von Web-APIs wie [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps), um zu überprüfen, ob eine plattform-spezifische Version Ihrer Web-App oder Ihre Web-App selbst bereits auf dem Gerät installiert ist.

Das `related_applications` Manifestmitglied kann auch mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied verwendet werden, das eine Präferenz für die Installation einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

## Syntax

```json-nolint
/* Related native application on one platform specified by both url and id */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }
]

/* Related native application on one platform specified only by id */
"related_applications": [
  {
    "platform": "windows",
    "id": "example.app1"
  }
]

/* Related native applications on two platforms */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  },
  {
    "platform": "amazon",
    "url": "https://www.amazon.com/product/dp/B000XA1000"
  }
]

/* Related web application specified by id */
"related_applications": [
  {
    "platform": "webapp",
    "id": "com.example.app1"
  }
]
```

### Werte

- `related_applications`
  - : Ein Array von Objekten, die jeweils eine plattform-spezifische Anwendung darstellen, die mit der Web-App in Verbindung steht. Jedes Objekt muss eine `platform` Eigenschaft und eine `url` oder eine `id` (oder beides) enthalten.
    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist.
        Beispiele sind `amazon` (Amazon App Store), `play` (Google Play Store), `windows` (Windows Store) und `webapp` (für Progressive Web Apps).
        Siehe die vollständige Liste möglicher [Plattformwerte](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, unter der die plattform-spezifische Anwendung zu finden ist.
        Wenn nicht angegeben, muss eine `id` angegeben werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen.
        Wenn nicht angegeben, muss eine `url` angegeben werden.

## Beschreibung

Eine "verwandte Anwendung" ist die Web-App selbst, wenn sie als Progressive Web App (PWA) installiert ist, oder eine {{Glossary("native", "native")}} Anwendung, die eine ähnliche Funktionalität wie Ihre Web-App bietet, oft mit zusätzlichen Funktionen oder besserer Integration mit den Geräten der Benutzer.

Das `related_applications` Manifestmitglied ermöglicht es Ihnen, die plattform-spezifischen Anwendungen zu identifizieren, die mit Ihrer Web-App in Verbindung stehen.
Zum Beispiel, wenn Sie eine native Android-App für Ihr Produkt haben, die über den Google Play Store verfügbar ist.
Sie bietet die gleichen Kernfunktionen wie Ihre Web-App und integriert sich besser in das Benachrichtigungssystem des Geräts.
Sie können `related_applications` verwenden, um diese native Android-App in der Manifestdatei Ihrer Web-App anzugeben.

Einige wichtige Punkte über das `related_applications` Mitglied sind:

- Es erlaubt Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, was Benutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen bietet.
- Es schafft eine unidirektionale Beziehung zwischen Ihrer Web-App und der angegebenen Plattform.
  Die nativen Apps müssen Ihre Web-App nicht im Gegenzug referenzieren.
- Die Daten können von Web-Crawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Web-App in Verbindung stehen, was möglicherweise die Auffindbarkeit dieser Apps verbessert.
- Bei Verwendung mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Mitglied, das auf `true` gesetzt ist, ermöglicht es Browsern, die Installation der verwandten nativen App anstelle Ihrer Web-App vorzuschlagen.

  > [!NOTE]
  > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Angabe einer verwandten nativen Anwendung

Dieses Beispiel zeigt, wie eine verwandte native Android-App in der Manifestdatei Ihrer Web-App angegeben wird. Es verwendet minimale Informationen, um die native App zu identifizieren, die im Google Play Store verfügbar ist:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

### Angabe verwandter nativer Anwendungen auf mehreren Plattformen

Wenn native Versionen Ihrer Web-App sowohl im Google Play Store als auch im Windows Store verfügbar sind, können Sie sie in der Manifestdatei Ihrer Web-App wie folgt angeben:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/store/detail/example-app1/9WZDNCRFHVJL"
    }
  ]
}
```

### Angabe der Präferenz für die Installation einer verwandten nativen App

Wenn Sie den Browsern anzeigen möchten, dass Sie es bevorzugen, dass den Benutzern die Option gegeben wird, Ihre native App, die im Google App Store verfügbar ist, anstelle Ihrer Web-App zu installieren, können Sie `prefer_related_applications` auf `true` setzen. Die Browser können dann den Benutzern vorschlagen, die native Android-App anstelle Ihrer Web-App zu installieren.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

### Angabe einer verwandten Webanwendung

Wenn Ihre Web-App als Progressive Web App (PWA) auf dem Gerät installiert werden kann, um beispielsweise Funktionen zu nutzen, die Ihre PWA in das Betriebssystem integrieren, können Sie Ihre Web-App im Manifest selbst referenzieren:

```json
{
  "related_applications": [
    {
      "platform": "webapp",
      "id": "com.example.app1"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) um Ihre Web-App installierbar zu machen
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps), um zu überprüfen, ob Ihre verwandte plattform-spezifische Version der Web-App oder die Web-App selbst installiert sind.
