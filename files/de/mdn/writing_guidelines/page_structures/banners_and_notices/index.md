---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{MDNSidebar}}

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in API-Referenzen, um wichtige Faktoren hervorzuheben, die die Nutzung der beschriebenen Inhalte beeinflussen. Zum Beispiel werden Banner verwendet, um darauf hinzuweisen, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht im Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext genutzt werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert. Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Banner-Makros hinzugefügt werden

Banner werden mithilfe von Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten, neben dem Seitensidebarmakro, eingefügt werden. Im folgenden Block wurde beispielsweise das `\{{SecureContext_Header}}`-Makro verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

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

Sie müssen die folgenden Makros manuell hinzufügen:

- `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erzeugt einen Hinweis, dass die Technologie in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um die in der Browser-Kompatibilitätsdaten-Repository gespeicherten Statuswerte widerzuspiegeln:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formellen Spezifikation ist, auch wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im Browser-Kompatibilitätsdaten-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}`-Banner enthalten, werden auch die entsprechenden `experimentell`, `veraltet` und `nicht-standard` Statuswerte in den Seitenmetadaten haben. Die Metadaten werden gleichzeitig mit den Headern automatisch aktualisiert. Die Banner-Makros hängen nicht von diesen Statusmetadaten ab (könnten jedoch eines Tages daraus generiert werden).

## Experimentell: "Standards positions"-Banner

Gelegentlich sind sich Browseranbieter uneinig darüber, wie sich ein Feature entwickelt, und einige können dem in seiner jetzigen Form ablehnend gegenüberstehen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community dazu zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und Browseranbieter zur Einigung zu bewegen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Features zu verdeutlichen. Während eine längerfristige Lösung zur Darstellung dieser Informationen noch nicht endgültig ist, tun wir Folgendes für spezifische Technologien mit hoher Bekanntheit, um Verwirrung zu vermeiden:

- Dieses Banner zur Einstiegsseite für das Feature hinzufügen (nicht für jede Unterseite des Features):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die das Feature ablehnen.
  - Verwenden Sie `Anbieter` oder `Anbieter` wie angemessen.

- Einen "Standards positions"-Abschnitt zur gleichen Seite wie das oben beschriebene Banner hinzufügen, als Unterabschnitt des standardmäßigen "Spezifikationen"-Abschnitts.

> [!NOTE]
> Siehe [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards positions"-Abschnitts und dessen Inhalte sowie das Banner der Einstiegsseite.
