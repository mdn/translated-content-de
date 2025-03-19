---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 403746be268eda7548079b0b40139c29b1c7c7da
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen zu spezifizieren, die beschreiben, wie Netzwerkanforderungen behandelt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerkanforderungen zu bewerten und zu modifizieren, ohne die Erweiterungen über individuelle Netzwerkanforderungen zu benachrichtigen.

## Berechtigungen

Um diese API zu nutzen, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` im [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) File anfordern. Die Berechtigung `"declarativeNetRequest"` wird Benutzern in Berechtigungsanfragen angezeigt, die Berechtigung `"declarativeNetRequestWithHostAccess"` hingegen nicht.

Die Berechtigung `"declarativeNetRequest"` erlaubt es Erweiterungen, Anforderungen zu blockieren und zu upgraden, ohne dass [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich sind. Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anforderungen umleiten oder Header bei Anforderungen modifizieren möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der Berechtigung `"declarativeNetRequest"` verwendet wird. Um in diesen Fällen auf Anforderungen zu reagieren, sind Host-Berechtigungen für die Anforderungs-URL erforderlich. Für alle Anforderungen, außer für Navigationsanforderungen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind Host-Berechtigungen auch für den Initiator der Anforderung erforderlich. Der Initiator einer Anforderung ist in der Regel das Dokument oder der Worker, der die Anforderung ausgelöst hat.

Einige Anforderungen sind eingeschränkt und können nicht von Erweiterungen abgeglichen werden. Dazu gehören privilegierte Browser-Anforderungen, Anforderungen zu oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anforderungen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da sie Informationen über übereinstimmende deklarative Regeln zurückgeben. Weitere Informationen finden Sie unter [Testen](#testen).

## Regeln

Die deklarativen Regeln sind durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Muss angegeben werden und sollte >= 1 sein.
- `priority` – Die Priorität der Regel. Wenn angegeben, sollte sie >= 1 sein. Standardmäßig 1. Weitere Einzelheiten, wie sich die Priorität darauf auswirkt, welche Regeln angewandt werden, finden Sie unter [Matching precedence](#matching_precedence).
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ergriffen werden soll, wenn die Regel übereinstimmt. Regeln können eine dieser Dinge tun:
  - Eine Netzwerk-Anforderung blockieren.
  - Eine Netzwerk-Anforderung umleiten.
  - Header von einer Netzwerk-Anforderung modifizieren.
  - Verhindern, dass eine andere übereinstimmende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anforderung nicht um und die Anforderung wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anforderung nicht ändert.
> - die Umleitungs-URL ungültig ist (z. B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL ist).

Dies ist eine Beispielregel, die alle Skriptanforderungen blockiert, die von `"foo.com"` zu einer beliebigen URL mit `"abc"` als Teilstring stammen:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

Das `urlFilter` Feld einer Regelbedingung wird verwendet, um das Muster zu spezifizieren, das gegen die Anforderungs-URL abgeglichen wird. Weitere Einzelheiten finden Sie unter {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}}. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Übereinstimmungen</th>
<th>Übereinstimmungen nicht</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## Regelsets

Regeln sind in Regelsets organisiert:

- **Statische Regelsets**: Sammlungen von Regeln, die mit dem [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Die Menge der aktivierten statischen Regelsets bleibt über Sitzungen hinweg erhalten, jedoch nicht über Erweiterungsaktualisierungen hinweg. Die statischen Regelsets, die bei der Installation und Aktualisierung der Erweiterung aktiviert sind, werden durch den Inhalt des `"declarative_net_request"` Manifest-Schlüssels bestimmt.
- **Dynamisches Regelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungsaktualisierungen hinweg bestehen.
- **Sitzungsregelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browser-Sitzungen hinweg bestehen.

> [!NOTE]
> Fehler und Warnungen zu ungültigen statischen Regeln werden nur während des [Testens](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, dass Sie sicherstellen, dass Ihre statischen Regelsets gültig sind, indem Sie testen.

## Begrenzungen

### Begrenzungen für statische Regelsets

Eine Erweiterung kann:

- Statische Regelsets im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- Statische Regelsets aktivieren (im `"declarative_net_request"` Manifest-Schlüssel oder programmatisch), sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl der aktivierten statischen Regelsets den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsets für alle Erweiterungen darf die globale Begrenzung nicht überschreiten. Erweiterungen sollten nicht davon ausgehen, dass die globale Begrenzung einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um herauszufinden, wie viele zusätzliche Regeln sie aktivieren können.
- Regeln in statischen Regelsets bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsspezifische Regeln

Die Anzahl der dynamischen und sitzungsspezifischen Regeln, die eine Erweiterung hinzufügen kann, ist begrenzt auf:

- In Safari und bis Chrome 119 und Firefox 127, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Matching precedence

Wenn der Browser bewertet, wie Anforderungen behandelt werden sollen, überprüft er die Regeln der jeweiligen Erweiterung, die eine Bedingung haben, die mit der Anforderung übereinstimmt, und wählt diejenige, die in Betracht gezogen wird, um angewendet zu werden, wie folgt aus:

1. die Priorität der Regel, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig auf 1 sind, wenn keine Priorität festgelegt ist).<br>
   Wenn dies nicht in einer einzigen anzuwendenden Regel resultiert:
2. die Regelaktion, in der folgenden Reihenfolge der Priorität:
   1. "allow" bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für main_frame und sub_frame resourceTypes) hat denselben Effekt wie allow, gilt jedoch auch für zukünftige Subressourcen-Ladevorgänge im aus der Anforderung generierten Dokument (einschließlich nachfolgender Frames).
   3. "block" hebt die Anforderung auf.
   4. "upgradeScheme" aktualisiert das Schema der Anforderung.
   5. "redirect" leitet die Anforderung um.
   6. "modifyHeaders" schreibt Anforderungs- oder Antwort-Header oder beides um.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln dieselbe Regelpriorität und denselben Regelaktionstyp haben, kann das Ergebnis mehrdeutig sein, wenn die übereinstimmende Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften und es gibt daher keine Mehrdeutigkeit: alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anforderung zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird alle bis auf eine "redirect"-Aktion ignoriert. Es ist dennoch möglich, wiederholt umzuleiten, wenn die umgeleitete Anforderung eine andere Regelbedingung erfüllt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig voneinander angewendet werden, wenn sie verschiedene Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie denselben Header betreffen, weil einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Reihenfolge der Auswertung von "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um zu kontrollieren, in welcher Reihenfolge die Aktionen angewendet werden, weisen Sie Regeln, deren Reihenfolge wichtig ist, unterschiedliche `priority`-Werte zu.

> [!NOTE]
> Nach der Regelpriorität und der Regelaktion berücksichtigt Firefox das Regelset, zu dem die Regel gehört, in dieser Reihenfolge der Priorität: Sitzung > dynamisch > statische Regelsets.
> Dies kann nicht über Browser hinweg als gegeben angesehen werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anforderung bereitstellt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine passende Regel hat, wählt der Browser diejenige aus, die in dieser Reihenfolge angewendet wird:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anforderung nicht blockiert oder umgeleitet wurde, werden die passenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um bei der Prüfung von Regeln und Regelsets zu helfen. Diese APIs erfordern die Berechtigungen `"declarativeNetRequestFeedback"`. Zusätzlich:

- In Chrome sind diese APIs nur für entpackte Erweiterungen verfügbar.
- In Firefox sind diese APIs nur verfügbar, nachdem die Einstellung `extensions.dnr.feedback` auf `true` gesetzt wurde. Setzen Sie diese Einstellung über `about:config` oder das [`--pref` Flag des `web-ext` CLI Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest API

- Die declarativeNetRequest API bewertet Netzwerkanforderungen im Browser selbst. Dies macht sie leistungsfähiger als die webRequest API, bei der jede Netzwerkanforderung in JavaScript im Erweiterungsprozess bewertet wird.
- Da die Anforderungen nicht vom Erweiterungsprozess abgefangen werden, entfällt mit declarativeNetRequest die Notwendigkeit, dass Erweiterungen eine Hintergrundseite haben.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Upgraden von Anforderungen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn sie mit der Berechtigung `declarativeNetRequest` verwendet wird.
- Die declarativeNetRequest API bietet Benutzern besseren Datenschutz, da Erweiterungen die im Auftrag des Benutzers gestellten Netzwerkanforderungen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden alle Bilder oder iframes, die mit der declarativeNetRequest API blockiert werden, automatisch im DOM zusammengeklappt.
- Bei der Entscheidung, ob eine Anforderung blockiert oder umgeleitet werden soll, erhält die declarativeNetRequest API den Vorzug gegenüber der webRequest API, da sie eine synchrone Abfangmethode ermöglicht. Ebenso werden alle Header, die durch die declarativeNetRequest API entfernt werden, den Webanforderungserweiterungen nicht sichtbar gemacht.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen ermöglicht, eine Anforderung programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details zu einer übereinstimmenden Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anforderungs- oder Antwort-Header, die für die Anforderung zu modifizieren sind.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details dazu, wie die Umleitung durchzuführen ist. Nur für Umleitungsregeln gültig.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anforderung.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details zu einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Maßnahme definiert, die zu ergreifen ist, wenn eine Regel übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter welcher eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das Details zu einer URL-Transformation enthält, die für eine Umleitungsaktion durchgeführt werden soll.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelset-ID für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Der Zeitintervall, in dem {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} Aufrufe durchgeführt werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl statischer Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsets garantiert werden.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl statischer Regeln, die in jedem statischen Regelset deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl dynamischer und sitzungsspezifischer Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl dynamischer Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl statischer Regelsets, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl regulärer Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl sitzungsspezifischer Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl statischer Regelsets, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssels angeben kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelset-ID für die von der Erweiterung hinzugefügten sitzungsspezifischen Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl statischer Regeln zurück, die eine Erweiterung aktivieren kann, bevor die globale Begrenzung für statische Regeln erreicht ist.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelset zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge dynamischer Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsets zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle für die Erweiterung passenden Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge sitzungsspezifischer Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie der Aktionszähler für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob irgendeine der `declarativeNetRequest`-Regeln der Erweiterung mit einer hypothetischen Anforderung übereinstimmen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge dynamischer Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsets für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Modifiziert die Menge sitzungsspezifischer Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Zustand von Regeln in einem statischen Regelset.

## Events

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anforderung übereinstimmt, wenn eine Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" debuggt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
