---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `related_applications` Manifestmitglied wird verwendet, um eine oder mehrere native Anwendungen anzugeben, die mit Ihrer Webanwendung verwandt sind. Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied verwendet werden, das eine Präferenz für die Installation einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

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

  - : Ein Array von Objekten, von denen jedes eine plattformspezifische native Anwendung repräsentiert, die mit der Web-App verbunden ist. Jedes Objekt muss eine `platform`-Eigenschaft und mindestens eine von `url` oder `id` (oder beides) enthalten.

    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist. Beispiele sind `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store). Siehe die vollständige Liste der möglichen [Plattform-Werte](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, unter der die plattformspezifische Anwendung gefunden werden kann. Wenn nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. Wenn nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "verwandte Anwendung" ist eine {{Glossary("native", "native")}} Anwendung, die ähnliche Funktionen wie Ihre Web-App bietet, oft mit zusätzlichen Funktionen oder besserer Integration in die Geräte der Benutzer.

Das `related_applications` Manifestmitglied ermöglicht es Ihnen, die plattformspezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Web-App verbunden sind. Zum Beispiel haben Sie vielleicht eine native Android-App für Ihr Produkt, die über den Google Play Store verfügbar ist. Sie bietet die gleichen Kernfunktionen wie Ihre Web-App und ist besser in das Benachrichtigungssystem des Geräts integriert. Sie können `related_applications` verwenden, um diese native Android-App in der Manifestdatei Ihrer Web-App anzugeben.

Einige wichtige Punkte über das `related_applications` Mitglied sind:

- Es ermöglicht Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, was Benutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen bietet.
- Es schafft eine unidirektionale Beziehung zwischen Ihrer Web-App und den angegebenen nativen Apps. Die nativen Apps müssen nicht im Gegenzug auf Ihre Web-App verweisen.
- Die Daten können von Web-Crawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Web-App verbunden sind, was möglicherweise die Auffindbarkeit dieser nativen Apps verbessert.

- Wenn es mit dem auf `true` gesetzten [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Mitglied verwendet wird, ermöglicht es Browsern, die Installation der verwandten nativen App anstelle Ihrer Web-App vorzuschlagen.

  > [!NOTE]
  > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Angabe einer verwandten nativen Anwendung

Dieses Beispiel zeigt, wie Sie eine verwandte native Android-App in der Manifestdatei Ihrer Web-App angeben können. Es verwendet minimale Informationen, um die native App zu identifizieren, die im Google Play Store verfügbar ist:

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

Wenn Sie den Browsern mitteilen möchten, dass Sie es bevorzugen, den Benutzern die Option zu geben, Ihre native App, die im Google App Store verfügbar ist, anstelle Ihrer Web-App zu installieren, können Sie `prefer_related_applications` auf `true` setzen. Browser können dann Benutzer auffordern, die native Android-App anstelle Ihrer Web-App zu installieren.

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
