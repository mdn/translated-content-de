---
title: prefer_related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `prefer_related_applications` Manifest-Mitglied wird verwendet, um Browsern einen Hinweis zu geben, ob bevorzugt native Anwendungen, die im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Manifest-Mitglied angegeben sind, anstelle Ihrer Webanwendung installiert werden sollen.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Werte

- `prefer_related_applications`
  - : Ein boolescher Wert:
    - Wenn auf `true` gesetzt, können Browser Benutzer dazu auffordern, eine der in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) aufgeführten Anwendungen anstelle Ihrer Web-App zu installieren.
    - Wenn auf `false` gesetzt oder weggelassen, bevorzugen Browser die Installation Ihrer Web-App gegenüber verwandten nativen Anwendungen.
      > [!NOTE]
      > Für auf Chromium basierende Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, damit Ihre Web-App installierbar ist.

## Beispiele

### Bevorzugung der Installation Ihrer Web-App angeben

Betrachten Sie ein Szenario, in dem Sie sowohl eine Web-App als auch native Apps für Ihr Produkt im Google Play Store und Windows Store verfügbar haben. Wenn Sie verwandte native Apps als Optionen anbieten möchten, aber bevorzugen, dass Benutzer Ihre Web-App installieren, können Sie dies in Ihrer Manifestdatei wie unten gezeigt einrichten. Browser werden Ihre Web-App zur Installation vorschlagen. Die nativen Apps stehen weiterhin als Alternativen zur Verfügung.

```json
{
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/detail/9nqx6sv74srz"
    }
  ]
}
```

### Bevorzugung der Installation der verwandten nativen App angeben

Um Benutzer dazu zu ermutigen, Ihre native Android-Wanderapp aus dem Google Play Store anstelle der Web-App zu installieren, können Sie die Manifestdatei Ihrer Web-App wie unten gezeigt konfigurieren.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Manifest-Mitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
