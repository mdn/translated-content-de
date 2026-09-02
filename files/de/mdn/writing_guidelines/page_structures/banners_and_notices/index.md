---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in der API-Referenz, um wichtige Faktoren hervorzuheben, die die Nutzung des beschriebenen Inhalts beeinflussen werden.
Zum Beispiel werden Banner verwendet, um hervorzuheben, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext verwendet werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert.
Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigsten Banner und wie sie hinzugefügt werden.

## Wo Banner-Makros hinzugefügt werden

Banner werden unter Verwendung von Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten, neben dem Seitenseitenleisten-Makro eingefügt werden. Zum Beispiel wurde im Block unten das `\{{SecureContext_Header}}`-Makro verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, das `\{{AvailableInWorkers}}`-Makro wurde verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur im [Window-Kontext](/de/docs/Web/API/Window) und im [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## Banner, die manuell hinzugefügt werden müssen

Sie müssen die folgenden Makros manuell hinzufügen:

- `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — Dies erzeugt einen **Verfügbar in Workern**-Hinweis, der anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um die in der [browser compat data](https://github.com/mdn/browser-compat-data)-Repository gespeicherten Status widerzuspiegeln:

- `\{{SeeCompatTable}}` — Erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Non-standard_Header}}` — Erzeugt ein **Nicht-Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`- oder `\{{Non-standard_Header}}`-Banner enthalten, werden auch entsprechende `experimental`- und `non-standard`-Statuswerte in den Seitenmetadaten haben.
> Die Metadaten werden gleichzeitig mit den Headern automatisch aktualisiert.
> Die Banner-Makros hängen nicht von diesen Status-Metadaten ab (könnten aber eines Tages davon generiert werden).

## Experimentell: "Standards positions"-Banner

Gelegentlich sind sich Browser-Anbieter uneinig darüber, wie sich eine Funktion entwickelt, und einige können ihr in ihrer aktuellen Form ablehnend gegenüberstehen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community dazu zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und den Browser-Anbietern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Funktionen zu verdeutlichen. Während eine langfristige Lösung, um diese Informationen darzustellen, noch nicht endgültig ist, tun wir Folgendes für bestimmte hochprofiliere Technologien, um Verwirrung zu vermeiden:

- Das Hinzufügen dieses Banners zur Startseite für diese Funktion (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browser-Anbieter, die sich gegen die Funktion aussprechen.
  - Verwenden Sie `vendor` oder `vendors` wie angemessen.

- Hinzufügen eines "Standards positions"-Abschnitts auf derselben Seite wie das obige Banner, als Unterabschnitt des standardmäßigen "Specifications"-Abschnitts.

> [!NOTE]
> Sehen Sie das [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) für ein Beispiel des "Standards positions"-Abschnitts und was er enthalten sollte, sowie das Startseite-Banner.
