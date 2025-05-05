---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `related_applications` Manifestmitglied wird verwendet, um eine oder mehrere native Anwendungen anzugeben, die mit Ihrer Webanwendung verwandt sind.
Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied verwendet werden, das eine Präferenz für die Installation entweder einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

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
```

### Werte

- `related_applications`

  - : Ein Array von Objekten, die jeweils eine plattform-spezifische native Anwendung darstellen, die mit der Web-App verwandt ist. Jedes Objekt muss eine `platform`-Eigenschaft und mindestens entweder eine `url` oder eine `id` (oder beides) enthalten.

    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist.
        Beispiele sind `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store).
        Sehen Sie die vollständige Liste der möglichen [Plattform-Werte](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, unter der die plattform-spezifische Anwendung zu finden ist.
        Wird sie nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die zur Repräsentation der Anwendung auf der angegebenen Plattform verwendet wird.
        Wird sie nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "verwandte Anwendung" ist eine {{Glossary("native", "native")}} Anwendung, die ähnliche Funktionalitäten wie Ihre Web-App bietet, häufig mit zusätzlichen Features oder besserer Integration mit den Geräten der Benutzer.

Das `related_applications` Manifestmitglied ermöglicht es Ihnen, die plattform-spezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Web-App verwandt sind.
Zum Beispiel, wenn Sie über eine native Android-App für Ihr Produkt verfügen, die im Google Play Store verfügbar ist.
Sie bietet dieselben Kernfunktionalitäten wie Ihre Web-App und integriert sich besser in das Benachrichtigungssystem des Geräts.
Sie können `related_applications` verwenden, um diese native Android-App in der Manifest-Datei Ihrer Web-App anzugeben.

Einige wichtige Punkte über das `related_applications` Mitglied sind:

- Es erlaubt Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, wodurch Benutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen gegeben werden.
- Es schafft eine unidirektionale Beziehung zwischen Ihrer Web-App und den angegebenen nativen Apps.
  Die nativen Apps müssen Ihre Web-App nicht im Gegenzug referenzieren.
- Die Daten könnten von Webcrawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Web-App verwandt sind, was möglicherweise die Auffindbarkeit dieser nativen Apps verbessern könnte.

- Wenn es zusammen mit dem auf `true` gesetzten [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Mitglied verwendet wird, ermöglicht es Browsern, die Installation der verwandten nativen App anstelle Ihrer Web-App vorzuschlagen.

  > [!NOTE]
  > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Angeben einer verwandten nativen Anwendung

Dieses Beispiel zeigt, wie man eine verwandte native Android-App in der Manifest-Datei Ihrer Web-App angibt. Es verwendet minimale Informationen, um die native App im Google Play Store zu identifizieren:

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

### Angeben verwandter nativer Anwendungen auf mehreren Plattformen

Wenn native Versionen Ihrer Web-App sowohl im Google Play Store als auch im Windows Store verfügbar sind, können Sie sie in der Manifest-Datei Ihrer Web-App folgendermaßen angeben:

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

### Angeben einer Präferenz für die Installation einer verwandten nativen App

Wenn Sie den Browsern anzeigen möchten, dass Sie es bevorzugen, dass Benutzern die Option gegeben wird, Ihre native App, verfügbar im Google App Store, anstelle Ihrer Web-App zu installieren, können Sie `prefer_related_applications` auf `true` setzen. Browser könnten dann Benutzer dazu auffordern, die native Android-App anstelle Ihrer Web-App zu installieren.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installierbarkeit Ihrer Web-App
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
