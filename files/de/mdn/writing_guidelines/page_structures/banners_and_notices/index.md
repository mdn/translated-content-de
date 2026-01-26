---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Banner und Hinweise werden auf einigen Seiten, insbesondere in API-Referenzen, angezeigt, um wichtige Faktoren hervorzuheben, die die Nutzung der beschriebenen Inhalte beeinflussen. Banner werden beispielsweise verwendet, um hervorzuheben, wann eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte, oder nur in einem sicheren Kontext eingesetzt werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert. Einige Bannermakros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Bannermakros hinzugefügt werden

Banner werden mit Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten neben dem Seitensidebar-Makro eingefügt werden. Zum Beispiel wurde im folgenden Block das `\{{SecureContext_Header}}`-Makro verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist, das `\{{AvailableInWorkers}}`-Makro wurde verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur im [Fensterkontext](/de/docs/Web/API/Window) und im [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

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

Die folgenden Makros müssen manuell hinzugefügt werden:

- `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erzeugt einen **Verfügbar in Workern**-Hinweis, der anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden dem Inhalt automatisch hinzugefügt, um den in der [browser compat data](https://github.com/mdn/browser-compat-data)-Repository gespeicherten Status zu entsprechen:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardmäßig**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, auch wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht den Browser-Kompatibilitätsdaten entsprechen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}`-Banner enthalten, haben auch die entsprechenden `experimentell`, `veraltet` und `nicht standardmäßig` Statuswerte in den Seitenmetadaten.
> Die Metadaten werden automatisch gleichzeitig mit den Kopfzeilen aktualisiert.
> Die Bannermakros hängen nicht von diesen Statusmetadaten ab (können jedoch eines Tages daraus generiert werden).

## Experimentell: "Standards-Positionen"-Banner

Gelegentlich sind sich Browserhersteller nicht darüber einig, wie sich eine Funktion entwickelt, und einige könnten ihr in ihrer aktuellen Form widersprechen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und Browserherstellern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Funktionen zu erläutern. Während eine langfristige Lösung zur Darstellung dieser Informationen noch nicht abgeschlossen ist, tun wir Folgendes für spezifische hochkarätige Technologien, um Verwirrung zu vermeiden:

- Hinzufügen dieses Banners zur Startseite für diese Funktion (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browserhersteller, die sich gegen die Funktion aussprechen.
  - Verwenden Sie `Anbieter` oder `Anbieter` je nach Bedarf.

- Hinzufügen eines Abschnitts "Standards-Positionen" zur selben Seite wie das obige Banner, als Unterabschnitt des standardmäßigen "Spezifikationen"-Abschnitts.

> [!NOTE]
> Siehe [Verwandte Websitesets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel für den Abschnitt "Standards-Positionen" und was er enthalten sollte, sowie das Startseiten-Banner.
