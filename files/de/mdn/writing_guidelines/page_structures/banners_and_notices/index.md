---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{MDNSidebar}}

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere bei API-Referenzen, um wichtige Faktoren hervorzuheben, die die Nutzung des beschriebenen Inhalts beeinflussen. Beispielsweise werden Banner verwendet, um zu betonen, wann eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext genutzt werden kann.

Banner werden durch Makros im Seiteninhalt dargestellt. Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Banner-Makros hinzugefügt werden

Banner werden durch Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten eingefügt werden, neben dem Seitenleisten-Makro. Zum Beispiel wurde im folgenden Block das `\{{SecureContext_Header}}`-Makro verwendet, um anzuzeigen, dass die {{domxref("AudioDecoder")}}-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers}}
```

## Banner, die manuell hinzugefügt werden müssen

Folgende Makros müssen manuell hinzugefügt werden:

- `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erzeugt eine Notiz, die anzeigt, dass die Technologie in [Web Worker](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um den Status zu entsprechen, der im Browser-compat-data-Repository gespeichert ist:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass der Gebrauch der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardisiert**-Banner, das anzeigt, dass der Gebrauch der Technologie nicht Teil einer formalen Spezifikation ist, auch wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im Browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros im Inhalt manuell/aktualisieren können, werden Werte, die nicht mit den Daten zur Browserkompatibilität übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner haben, werden auch die entsprechenden `experimental`, `deprecated` und `non-standard` Status-Werte in den Seitenmetadaten haben. Die Metadaten werden automatisch gleichzeitig mit den Überschriften aktualisiert. Die Banner-Makros hängen nicht von diesen Status-Metadaten ab (könnten aber möglicherweise eines Tages daraus generiert werden).

## Experimentell: "Standards positions"-Banner

Gelegentlich sind sich Browseranbieter uneinig darüber, wie sich ein Feature entwickelt, und einige können es in seiner aktuellen Form ablehnen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, sie zu experimentieren, Feedback zu geben und den Browseranbietern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Funktionen zu verdeutlichen. Während eine langfristige Lösung zur Darstellung dieser Information nicht endgültig ist, machen wir Folgendes für bestimmte prominente Technologien, um Verwirrung zu vermeiden:

- Hinzufügen dieses Banners zur Startseite für diese Funktion (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > Dieses Feature wird derzeit von <number> Browseranbieter(n) abgelehnt. Weitere Informationen zur Ablehnung finden Sie im Abschnitt [Standards positions](#standards_positions) unten.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die das Feature ablehnen.
  - Verwenden Sie `Anbieter` oder `Anbietern`, je nach Bedarf.

- Hinzufügen eines "Standards positions"-Abschnitts auf derselben Seite wie das obige Banner, als Unterabschnitt des standardmäßigen "Spezifikationen"-Abschnitts.

> [!NOTE]
> Sehen Sie sich [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards positions"-Abschnitts und dessen Inhalt an, ebenso wie das Banner auf der Startseite.
