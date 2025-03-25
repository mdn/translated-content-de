---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `related_applications`-Manifestmitglied wird verwendet, um eine oder mehrere native Anwendungen anzugeben, die mit Ihrer Webanwendung in Verbindung stehen.
Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications)-Manifestmitglied verwendet werden, das eine Präferenz für die Installation einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

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

  - : Ein Array von Objekten, die jeweils eine plattformspezifische native Anwendung darstellen, die mit der Webanwendung verwandt ist. Jedes Objekt muss eine `platform`-Eigenschaft enthalten und mindestens eine von entweder einer `url` oder einer `id` (oder beides).

    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist.
        Beispiele sind `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store).
        Siehe die vollständige Liste der möglichen [Plattformwerte](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, unter der die plattformspezifische Anwendung zu finden ist.
        Wenn nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die zur Darstellung der Anwendung auf der angegebenen Plattform verwendet wird.
        Wenn nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "verwandte Anwendung" ist eine {{Glossary("native", "native")}} Anwendung, die ähnliche Funktionen wie Ihre Webanwendung bietet, oft mit zusätzlichen Funktionen oder besserer Integration mit den Geräten der Benutzer.

Das `related_applications`-Manifestmitglied ermöglicht es Ihnen, die plattformspezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Webanwendung in Verbindung stehen.
Angenommen, Sie haben eine native Android-App für Ihr Produkt im Google Play Store verfügbar.
Sie bietet die gleichen Kernfunktionen wie Ihre Webanwendung und integriert sich besser in das Benachrichtigungssystem des Geräts.
Sie können `related_applications` verwenden, um diese native Android-App in der Manifestdatei Ihrer Webanwendung anzugeben.

Einige wichtige Punkte zum `related_applications`-Mitglied sind:

- Es ermöglicht Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, um Benutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen zu bieten.
- Es erstellt eine unidirektionale Beziehung zwischen Ihrer Webanwendung und den angegebenen nativen Apps.
  Die nativen Apps müssen Ihre Webanwendung nicht im Gegenzug referenzieren.
- Die Daten können von Webcrawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Webanwendung in Verbindung stehen, was die Auffindbarkeit dieser nativen Apps verbessern könnte.

- Wenn es mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications)-Mitglied auf `true` gesetzt verwendet wird, ermöglicht es Browsern, die Installation der verwandten nativen App anstelle Ihrer Webanwendung vorzuschlagen.

  > [!NOTE]
  > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Webanwendung installierbar zu machen.

## Beispiele

### Eine verwandte native Anwendung angeben

Dieses Beispiel zeigt, wie eine verwandte native Android-App in der Manifestdatei Ihrer Webanwendung angegeben wird. Es verwendet minimale Informationen, um die im Google Play Store verfügbare native App zu identifizieren:

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

### Verwandte native Anwendungen auf mehreren Plattformen angeben

Wenn native Versionen Ihrer Webanwendung sowohl im Google Play Store als auch im Windows Store verfügbar sind, können Sie sie in der Manifestdatei Ihrer Webanwendung wie folgt angeben:

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

### Präferenz für die Installation einer verwandten nativen App angeben

Wenn Sie den Browsern mitteilen möchten, dass Sie es bevorzugen, Benutzern die Möglichkeit zu geben, Ihre native App zu installieren, die im Google Play Store verfügbar ist, anstatt Ihrer Webanwendung, können Sie `prefer_related_applications` auf `true` setzen. Die Browser können dann Benutzer dazu auffordern, die native Android-App anstelle Ihrer Web-App zu installieren.

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installation Ihrer Webanwendung
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
