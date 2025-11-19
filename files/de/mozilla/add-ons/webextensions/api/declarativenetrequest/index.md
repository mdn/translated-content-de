---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen festzulegen, die beschreiben, wie Netzwerk-Anfragen behandelt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerk-Anfragen zu bewerten und zu modifizieren, ohne die Erweiterungen über einzelne Netzwerk-Anfragen zu benachrichtigen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern. Die Berechtigung `"declarativeNetRequest"` wird den Nutzern in Berechtigungsaufforderungen angezeigt, die Berechtigung `"declarativeNetRequestWithHostAccess"` nicht.

Die Berechtigung `"declarativeNetRequest"` ermöglicht es Erweiterungen, Anfragen ohne jegliche [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) zu blockieren und zu aktualisieren. Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder Header bei Anfragen ändern möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der Berechtigung `"declarativeNetRequest"` verwendet wird. Um auf Anfragen in diesen Fällen zu reagieren, sind Host-Berechtigungen für die Anfrage-URL erforderlich. Für alle Anfragen, mit Ausnahme von Navigationsanfragen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind Host-Berechtigungen auch für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist in der Regel das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können nicht von Erweiterungen abgeglichen werden. Dazu gehören privilegierte Browser-Anfragen, Anfragen zu oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da sie Informationen über übereinstimmende deklarative Regeln zurückgeben. Weitere Informationen finden Sie unter [Testing](#testing).

## Regeln

Die deklarativen Regeln werden durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Erforderlich und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn angegeben, sollte sie >= 1 sein. Standardwert ist 1. Details dazu, wie die Priorität beeinflusst, welche Regeln angewendet werden, finden Sie unter [Matching precedence](#übereinstimmende_priorität).
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ausgeführt wird, wenn die Regel übereinstimmt. Regeln können eine dieser Aktionen ausführen:
  - eine Netzwerkanfrage blockieren.
  - eine Netzwerkanfrage umleiten.
  - Header von einer Netzwerkanfrage ändern.
  - Verhindern, dass eine andere übereinstimmende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z.B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} ist keine gültige URL).

Dies ist eine Beispielregel, die alle Skriptanfragen blockiert, die von `"example.com"` zu jeder URL mit `"abc"` als Substring stammen:

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

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster anzugeben, das mit der Anfrage-URL abgeglichen wird. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Matches</th>
<th>Does not match</th>
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

## Regelwerke

Regeln sind in Regelwerken organisiert:

- **statische Regelwerke**: Sammlungen von Regeln, die mit dem [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelwerke mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Die Menge der aktivierten statischen Regelwerke wird über Sitzungen hinweg beibehalten, jedoch nicht über Erweiterungsaktualisierungen hinweg. Die beim Installieren und Aktualisieren der Erweiterung aktivierten statischen Regelwerke werden durch den Inhalt des `"declarative_net_request"` Manifests festgelegt.
- **dynamisches Regelwerk**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungsaktualisierungen bestehen.
- **Sitzungsregelwerk**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browsersitzungen bestehen.

> [!NOTE]
> Fehler und Warnungen zu ungültigen statischen Regeln werden nur bei [Testing](#testing) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, sicherzustellen, dass Ihre statischen Regelwerke gültig sind, indem Sie testen.

## Grenzen

### Grenzen des statischen Regelwerks

Eine Erweiterung kann:

- statische Regelwerke im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- statische Regelwerke (im `"declarative_net_request"` Manifest-Schlüssel oder programmatisch) aktivieren, sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl aktivierter statischer Regelwerke den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelwerken aller Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten sich nicht darauf verlassen, dass das globale Limit einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl zusätzlicher Regeln zu finden, die sie aktivieren können.
- Regeln in statischen Regelwerken bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsbezogene Regeln

Die Anzahl der dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann, ist begrenzt auf:

- In Safari und bis Chrome 119 und Firefox 127 den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128 die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Übereinstimmende Priorität

Wenn der Browser bewertet, wie Anfragen zu behandeln sind, überprüft er die Regeln jeder Erweiterung, die eine Bedingung hat, die mit der Anfrage übereinstimmt, und wählt die Regel, die angewendet werden soll, wie folgt:

1. Die Regelpriorität, wobei 1 die niedrigste Priorität ist (und die Regeln standardmäßig auf 1 gesetzt sind, wenn die Priorität nicht festgelegt ist).<br>
   Wenn dies nicht zu einer Regel führt, die angewendet werden soll:
2. Die Regelaktion, in der folgenden Reihenfolge der Priorität:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für die Ressourcentypen main_frame und sub_frame) hat die gleiche Wirkung wie allow, bezieht sich jedoch auch auf zukünftige Subressourcen, die im Dokument geladen werden (einschließlich Nachfahrenframes), die aus der Anfrage generiert werden.
   3. "block" bricht die Anfrage ab.
   4. "upgradeScheme" hebt das Schema der Anfrage an.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" ändert Anforderungs- oder Antwortheader oder beides.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln die gleiche Regelpriorität und den gleichen Regelaktionstyp haben, kann das Ergebnis uneindeutig sein, wenn die übereinstimmende Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften, und daher gibt es keine Mehrdeutigkeit: Alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird nur eine "redirect"-Aktion berücksichtigt. Es ist dennoch möglich, wiederholte Umleitungen durchzuführen, wenn die umgeleitete Anfrage mit einer weiteren Regelbedingung übereinstimmt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig voneinander angewendet werden, wenn sie unterschiedliche Header betreffen. Das Ergebnis ist uneindeutig, wenn sie denselben Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Evaluierungsreihenfolge von "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge zu kontrollieren, in der Aktionen angewendet werden, weisen Sie Regeln, deren Prioritätsreihenfolge wichtig ist, unterschiedliche `priority` Werte zu.

> [!NOTE]
> Nach der Regelpriorität und der Regelaktion berücksichtigt Firefox das Regelwerk, zu dem die Regel gehört, in dieser Reihenfolge der Priorität: Sitzung > dynamisch > statische Regelwerke.
> Darauf kann nicht browserübergreifend vertraut werden, siehe [WECG Issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wo jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser die anzuwendende Regel in dieser Reihenfolge der Priorität:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die übereinstimmenden `modifyHeaders`-Aktionen angewendet, wie dokumentiert in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}.

## Testing

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelwerken zu helfen. Diese APIs erfordern die `"declarativeNetRequestFeedback"` [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Zusätzlich gilt:

- In Chrome sind diese APIs nur für nicht gepackte Erweiterungen verfügbar.
- In Firefox sind diese APIs nur verfügbar, nachdem die Einstellung `extensions.dnr.feedback` auf `true` gesetzt wurde. Setzen Sie diese Einstellung mit `about:config` oder dem [`--pref`-Flag des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest API

- Die declarativeNetRequest API bewertet Netzwerk-Anfragen direkt im Browser. Dies macht sie leistungsfähiger als die webRequest API, bei der jede Netzwerk-Anfrage in JavaScript im Erweiterungsprozess bewertet wird.
- Da die Anfragen nicht durch den Erweiterungsprozess abgefangen werden, entfällt bei der declarativeNetRequest API die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Hochstufen von Anfragen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn die `declarativeNetRequest` Berechtigung verwendet wird.
- Die declarativeNetRequest API bietet den Nutzern eine bessere Privatsphäre, da Erweiterungen die im Namen des Nutzers vorgenommenen Netzwerk-Anfragen nicht lesen.
- (Nur Chrome:) Anders als bei der webRequest API werden durch die declarativeNetRequest API blockierte Bilder oder iframes automatisch im DOM ausgeblendet.
- Während entschieden wird, ob eine Anfrage blockiert oder umgeleitet werden soll, wird der declarativeNetRequest API gegenüber der webRequest API Priorität eingeräumt, da sie eine synchrone Abfangmöglichkeit ermöglicht. Ebenso werden Header, die durch die declarativeNetRequest API entfernt werden, den Webanfrageerweiterungen nicht sichtbar gemacht.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen erlaubt, eine Anfrage programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}
  - : Der Antwortheader, der mit der Anfrage abzugleichen ist, deklariert im [`rule.condition.excludedResponseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders) Array oder im [`rule.condition.responseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders) Array.
- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer übereinstimmenden Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anfrage- oder Antwortheader, die für die Anfrage zu ändern sind.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Maßnahme definiert, die ergriffen werden soll, wenn eine Regel übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das Details einer URL-Transformation enthält, die für eine Umleitungsaktion durchgeführt werden soll.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelwerk-ID für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} Aufrufe durchgeführt werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl statischer Regeln, die einer Erweiterung über ihre aktivierten statischen Regelwerke garantiert sind.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Aufrufe, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} getätigt werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl statischer Regeln, die in jedem statischen Regelwerk deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl dynamischer Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl statischer Regelwerke, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl von regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl sitzungsbezogener Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl statischer Regelwerke, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifests angeben kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelwerk-ID für die von der Erweiterung hinzugefügten sitzungsbezogenen Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl statischer Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht wird.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelwerk zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs der Menge aktivierter statischer Regelwerke zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle für die Erweiterung übereinstimmenden Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsbezogenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter) Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung mit einer hypothetischen Anfrage übereinstimmen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge dynamischer Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die aktive Menge statischer Regelwerke für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge der sitzungsbezogenen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den Aktivierungsstatus von Regeln in einem statischen Regelwerk.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, während das Debuggen einer Erweiterung mit der "declarativeNetRequestFeedback"-Berechtigung.

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
