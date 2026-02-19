---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 2df9b00f7e08f3746dde943af8959ec42b8e448c
---

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen festzulegen, die beschreiben, wie Netzwerkanforderungen behandelt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerkanforderungen zu evaluieren und zu modifizieren, ohne die Erweiterungen über einzelne Netzwerkanforderungen zu benachrichtigen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern. Die Berechtigung `"declarativeNetRequest"` wird den Benutzern in den Berechtigungsaufforderungen angezeigt, die Berechtigung `"declarativeNetRequestWithHostAccess"` jedoch nicht.

Die Berechtigung `"declarativeNetRequest"` erlaubt es Erweiterungen, Anfragen zu blockieren und zu aktualisieren, ohne dass [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich sind. Host-Berechtigungen werden benötigt, wenn die Erweiterung Anfragen umleiten oder Header von Anfragen ändern möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der Berechtigung `"declarativeNetRequest"` verwendet wird. Um Anfragen in diesen Fällen zu bearbeiten, sind Host-Berechtigungen für die Anfrage-URL erforderlich. Für alle Anfragen, außer für Navigationsanfragen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind auch Host-Berechtigungen für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist normalerweise das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können nicht von Erweiterungen abgeglichen werden. Dazu gehören privilegierte Browseranfragen, Anfragen zu oder von [eingeschränkten Domänen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da sie Informationen über übereinstimmende deklarative Regeln zurückgeben. Weitere Informationen finden Sie unter [Testing](#testing).

## Regeln

Die deklarativen Regeln werden durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Erforderlich und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn angegeben, sollte sie >= 1 sein. Standardmäßig 1. Siehe [Matching precedence](#matching_precedence) für Details, wie sich die Priorität darauf auswirkt, welche Regeln angewendet werden.
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ausgeführt werden soll, wenn die Regel übereinstimmt. Regeln können Folgendes tun:
  - eine Netzwerk-Anfrage blockieren.
  - eine Netzwerk-Anfrage umleiten.
  - Header einer Netzwerk-Anfrage ändern.
  - verhindern, dass eine andere übereinstimmende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um und die Anfrage wird normal fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z. B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL ist).

Dies ist eine Beispielregel, die alle Skript-Anfragen blockiert, die von `"example.com"` zu jeder URL mit `"abc"` als Teilzeichenfolge ausgehen:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["example.com"],
    "resourceTypes": ["script"]
  }
}
```

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster anzugeben, das mit der Anfrage-URL abgeglichen wird. Weitere Details finden Sie unter {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}}. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Stimmt überein mit</th>
<th>Stimmt nicht überein mit</th>
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

Regeln werden in Regelsets organisiert:

- **statische Regelsets**: Sammlungen von Regeln, die mit dem Schlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) im Manifest definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Der Satz aktivierter statischer Regelsets wird über Sitzungen hinweg beibehalten, nicht jedoch über Erweiterungsaktualisierungen. Die aktivierten statischen Regelsets bei der Installation und Aktualisierung der Erweiterung werden durch den Inhalt des `"declarative_net_request"` Manifests bestimmt.
- **dynamisches Regelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungsaktualisierungen hinweg bestehen.
- **Sitzungsregelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browsersitzungen hinweg bestehen.

> [!NOTE]
> Fehler und Warnungen zu ungültigen statischen Regeln werden nur während der [Testing](#testing) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, zu überprüfen, ob Ihre statischen Regelsets gültig sind, indem Sie sie testen.

## Grenzen

### Grenzen für statische Regelsets

Eine Erweiterung kann:

- statische Regelsets im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- statische Regelsets aktivieren (im `"declarative_net_request"` Manifest-Schlüssel oder programmgesteuert), sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl der aktivierten statischen Regelsets den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht übersteigt.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsets für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten sich nicht darauf verlassen, dass das globale Limit einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl der zusätzlichen Regeln zu ermitteln, die sie aktivieren können.
- Regeln in statischen Regelsets bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und Sitzungsregeln

Die Anzahl der dynamischen und auf Sitzungen beschränkten Regeln, die eine Erweiterung hinzufügen kann, ist begrenzt auf:

- In Safari und bis Chrome 119 und Firefox 127 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128 auf die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Matching Precedence

Wenn der Browser evaluiert, wie Anfragen behandelt werden sollen, überprüft er die Regeln jeder Erweiterung, die eine Bedingung aufweisen, die der Anfrage entspricht, und wählt die Regel, die in Betracht gezogen werden soll, wie folgt:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig auf 1 gesetzt sind, wenn keine Priorität festgelegt ist).<br>
   Wenn dies zu keiner spezifischen Regelanwendung führt:
2. die Regelaktion, in folgender Reihenfolge der Vorrangigkeit:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für die Ressourcentypen main_frame und sub_frame) hat die gleiche Wirkung wie allow, gilt aber auch für zukünftige Subressourcenladevorgänge im Dokument (einschließlich nachgeordneter Frames), die aus der Anfrage generiert werden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" ändert Header in Anfragen oder Antworten oder beides.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln die gleiche Regelpriorität und den gleichen Regelaktionstyp haben, kann das Ergebnis nicht eindeutig sein, wenn die übereinstimmte Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften und daher besteht keine Mehrdeutigkeit: Alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird jede bis auf eine "redirect"-Aktion ignoriert. Es ist immer noch möglich, wiederholt umzuleiten, wenn die umgeleitete Anfrage einer anderen Regelbedingung entspricht.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig angewendet werden, wenn sie unterschiedliche Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie denselben Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Evaluationsreihenfolge von "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge zu kontrollieren, in der Aktionen angewendet werden, weisen Sie Regeln unterschiedliche `priority`-Werte zu, deren Reihenfolge wichtig ist.

> [!NOTE]
> Nach Regelpriorität und Regelaktion berücksichtigt Firefox das Regelset, zu dem die Regel gehört, in dieser Vorrangreihenfolge: Sitzung > dynamisch > statische Regelsets.
> Dies kann nicht browserübergreifend als zuverlässig angesehen werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser die anzuwendende Regel in folgender Vorrangreihenfolge:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die übereinstimmenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testing

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelsets zu helfen. Diese APIs erfordern die Berechtigung `"declarativeNetRequestFeedback"`. Darüber hinaus:

- In Chrome sind diese APIs nur für entpackte Erweiterungen verfügbar.
- In Firefox sind diese APIs nur verfügbar, wenn die `extensions.dnr.feedback`-Voreinstellung auf `true` gesetzt ist. Diese Einstellung kann mit `about:config` oder dem [`--pref`-Flag des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref) gesetzt werden.

## Vergleich mit der webRequest-API

- Die declarativeNetRequest API evaluiert Netzwerk-Anfragen direkt im Browser. Dies macht sie leistungsfähiger als die webRequest API, bei der jede Netzwerk-Anfrage im JavaScript im Erweiterungsprozess evaluiert wird.
- Da die Anfragen nicht vom Erweiterungsprozess abgefangen werden, entfällt die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben, wenn die declarativeNetRequest API verwendet wird.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Aktualisieren von Anfragen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn sie mit der Berechtigung `declarativeNetRequest` verwendet wird.
- Die declarativeNetRequest API bietet Benutzern mehr Privatsphäre, da Erweiterungen die im Namen des Nutzers erstellten Netzwerk-Anfragen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden alle Bilder oder iframes, die mit der declarativeNetRequest API blockiert werden, automatisch im DOM zusammengeklappt.
- Bei der Entscheidung, ob eine Anfrage blockiert oder umgeleitet werden soll, hat die declarativeNetRequest API gegenüber der webRequest API Vorrang, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso werden Header, die über die declarativeNetRequest API entfernt wurden, den Webanfrageerweiterungen nicht sichtbar gemacht.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es den Erweiterungen ermöglicht, eine Anfrage programmatisch zu evaluieren.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}
  - : Der Antwort-Header, der für die Anfrage abgeglichen wird, deklariert im [`rule.condition.excludedResponseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders)-Array oder im [`rule.condition.responseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders)-Array.
- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer übereinstimmenden Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anfrage- oder Antwort-Header, die für die Anfrage geändert werden sollen.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung durchgeführt werden sollte. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das die Details einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Aktion definiert, die durchgeführt werden soll, wenn eine Regel übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das die Details einer URL-Transformation für eine Umleitungsaktion enthält.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Die Regelset-ID für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} Aufrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl statischer Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsets garantiert sind.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl statischer Regeln, die in jedem statischen Regelset deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl dynamischer und auf Sitzungen beschränkter Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl dynamischer Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl statischer Regelsets, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl an regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl an auf Sitzungen beschränkten Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsets, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssels angeben kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelset-ID für die von der Erweiterung hinzugefügten auf Sitzungen beschränkten Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht ist.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelset zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge an dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die aktiven statischen Regelsets zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle übereinstimmenden Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der auf Sitzungen beschränkten Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter) Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung eine hypothetische Anfrage übereinstimmen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge an dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge an aktiven statischen Regelsets für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge an auf Sitzungen beschränkten Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Zustand von Regeln in einem statischen Regelset.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel einer Anfrage zugeordnet wird, während das Debugging einer Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" durchgeführt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
