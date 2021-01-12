import React, {useState} from 'react';

// import all the components we are going to use
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

import BasicTimeLine from './components/BasicTimeLine';
import CustomTimeLine from './components/CustomTimeLine';
import DotTimeLine from './components/DotTimeLine';
import IconTimeLine from './components/IconTimeLine';
import OverrideRenderTimeLine from './components/OverrideRenderTimeLine';
import RefreshLoadMoreTimeLine from './components/RefreshLoadMoreTimeLine';
import SingleRightTimeLine from './components/SingleRightTimeLine';
import TemplateTimeLine from './components/TemplateTimeLine';
import TimeLinePress from './components/TimeLinePress';
import TwoColumnTimeLine from './components/TwoColumnTimeLine';

const App = () => {
	const [val, setVal] = useState(1);

	const renderElement = () => {
		if (val === 1) {
			return <BasicTimeLine />;
		} else if (val === 2) {
			return <CustomTimeLine />;
		} else if (val === 3) {
			return <DotTimeLine />;
		} else if (val === 4) {
			return <IconTimeLine />;
		} else if (val === 5) {
			return <OverrideRenderTimeLine />;
		} else if (val === 6) {
			return <RefreshLoadMoreTimeLine />;
		} else if (val === 7) {
			return <SingleRightTimeLine />;
		} else if (val === 8) {
			return <TemplateTimeLine />;
		} else if (val === 9) {
			return <TimeLinePress />;
		} else if (val === 10) {
			return <TwoColumnTimeLine />;
		}
	};

	const tabName = [
		'Basic TimeLine',
		'Custom TimeLine',
		'Dot TimeLine',
		'Icon TimeLine',
		'Override Render TimeLine',
		'Refresh Load More TimeLine',
		'Single Right TimeLine',
		'Template TimeLine',
		'TimeLine Press',
		'Two Column TimeLine',
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<View>
					<ScrollView horizontal>
						<View style={{flexDirection: 'row'}}>
							{tabName.map((item, index) => {
								return (
									<TouchableOpacity
										key={index + 1}
										style={[
											styles.buttonStyle,
											{
												backgroundColor:
													val == index + 1 ? 'orange' : '#808080',
											},
										]}
										onPress={() => setVal(index + 1)}>
										<Text style={{color: '#ffffff'}}>
											{item}
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					</ScrollView>
				</View>
				<View style={styles.childContainer}>
					{renderElement()}
				</View>
			</View>
		</SafeAreaView>
	);
};
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	buttonStyle: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
		margin: 2,
	},
	childContainer: {
		backgroundColor: '#f9f9f9',
		flex: 1,
		padding: 10,
	},
});